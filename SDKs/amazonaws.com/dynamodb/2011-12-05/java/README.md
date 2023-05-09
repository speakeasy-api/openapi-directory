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
import org.openapis.openapi.models.operations.BatchGetItemRequest;
import org.openapis.openapi.models.operations.BatchGetItemResponse;
import org.openapis.openapi.models.operations.BatchGetItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.BatchGetItemInput;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.KeysAndAttributes;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetItemRequest req = new BatchGetItemRequest(                new BatchGetItemInput(                new java.util.HashMap<String, org.openapis.openapi.models.shared.KeysAndAttributes>() {{
                                                put("distinctio", new KeysAndAttributes(                new org.openapis.openapi.models.shared.Key[]{{
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "molestiae";
                                                                                        bs = new String[]{{
                                                                                            add("error"),
                                                                                        }};
                                                                                        n = "quia";
                                                                                        ns = new String[]{{
                                                                                            add("vitae"),
                                                                                            add("laborum"),
                                                                                        }};
                                                                                        s = "animi";
                                                                                        ss = new String[]{{
                                                                                            add("odit"),
                                                                                            add("quo"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "mollitia";
                                                                            bs = new String[]{{
                                                                                add("dolores"),
                                                                                add("dolorem"),
                                                                                add("corporis"),
                                                                            }};
                                                                            n = "explicabo";
                                                                            ns = new String[]{{
                                                                                add("enim"),
                                                                                add("omnis"),
                                                                                add("nemo"),
                                                                                add("minima"),
                                                                            }};
                                                                            s = "excepturi";
                                                                            ss = new String[]{{
                                                                                add("iure"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "culpa";
                                                                            bs = new String[]{{
                                                                                add("sapiente"),
                                                                                add("architecto"),
                                                                                add("mollitia"),
                                                                                add("dolorem"),
                                                                            }};
                                                                            n = "culpa";
                                                                            ns = new String[]{{
                                                                                add("repellat"),
                                                                            }};
                                                                            s = "mollitia";
                                                                            ss = new String[]{{
                                                                                add("numquam"),
                                                                                add("commodi"),
                                                                                add("quam"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "dicta";
                                                                                        bs = new String[]{{
                                                                                            add("enim"),
                                                                                            add("accusamus"),
                                                                                            add("commodi"),
                                                                                        }};
                                                                                        n = "repudiandae";
                                                                                        ns = new String[]{{
                                                                                            add("ipsum"),
                                                                                        }};
                                                                                        s = "quidem";
                                                                                        ss = new String[]{{
                                                                                            add("excepturi"),
                                                                                            add("pariatur"),
                                                                                            add("modi"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "sequi";
                                                                            bs = new String[]{{
                                                                                add("ipsam"),
                                                                                add("id"),
                                                                                add("possimus"),
                                                                                add("aut"),
                                                                            }};
                                                                            n = "quasi";
                                                                            ns = new String[]{{
                                                                                add("temporibus"),
                                                                                add("laborum"),
                                                                                add("quasi"),
                                                                            }};
                                                                            s = "reiciendis";
                                                                            ss = new String[]{{
                                                                                add("vero"),
                                                                                add("nihil"),
                                                                                add("praesentium"),
                                                                                add("voluptatibus"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "ipsa";
                                                                            bs = new String[]{{
                                                                                add("voluptate"),
                                                                                add("cum"),
                                                                                add("perferendis"),
                                                                            }};
                                                                            n = "doloremque";
                                                                            ns = new String[]{{
                                                                                add("ut"),
                                                                                add("maiores"),
                                                                            }};
                                                                            s = "dicta";
                                                                            ss = new String[]{{
                                                                                add("dolore"),
                                                                                add("iusto"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "ipsam";
                                                                                        bs = new String[]{{
                                                                                            add("fugit"),
                                                                                        }};
                                                                                        n = "dolorum";
                                                                                        ns = new String[]{{
                                                                                            add("tempora"),
                                                                                            add("facilis"),
                                                                                            add("tempore"),
                                                                                        }};
                                                                                        s = "labore";
                                                                                        ss = new String[]{{
                                                                                            add("eum"),
                                                                                            add("non"),
                                                                                            add("eligendi"),
                                                                                            add("sint"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "praesentium";
                                                                            bs = new String[]{{
                                                                                add("voluptates"),
                                                                                add("quasi"),
                                                                                add("repudiandae"),
                                                                            }};
                                                                            n = "sint";
                                                                            ns = new String[]{{
                                                                                add("itaque"),
                                                                            }};
                                                                            s = "incidunt";
                                                                            ss = new String[]{{
                                                                                add("consequatur"),
                                                                                add("est"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "quibusdam";
                                                                            bs = new String[]{{
                                                                                add("deserunt"),
                                                                            }};
                                                                            n = "distinctio";
                                                                            ns = new String[]{{
                                                                                add("labore"),
                                                                                add("modi"),
                                                                                add("qui"),
                                                                                add("aliquid"),
                                                                            }};
                                                                            s = "cupiditate";
                                                                            ss = new String[]{{
                                                                                add("perferendis"),
                                                                                add("magni"),
                                                                                add("assumenda"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    attributesToGet = new String[]{{
                                                        add("unde"),
                                                        add("nulla"),
                                                        add("corrupti"),
                                                        add("illum"),
                                                    }};
                                                    consistentRead = false;
                                                    keys = new org.openapis.openapi.models.shared.Key[]{{
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "quo";
                                                                            bs = new String[]{{
                                                                                add("at"),
                                                                            }};
                                                                            n = "at";
                                                                            ns = new String[]{{
                                                                                add("molestiae"),
                                                                                add("quod"),
                                                                                add("quod"),
                                                                                add("esse"),
                                                                            }};
                                                                            s = "totam";
                                                                            ss = new String[]{{
                                                                                add("dolorum"),
                                                                                add("dicta"),
                                                                                add("nam"),
                                                                                add("officia"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "error";
                                                                bs = new String[]{{
                                                                    add("suscipit"),
                                                                    add("iure"),
                                                                    add("magnam"),
                                                                }};
                                                                n = "debitis";
                                                                ns = new String[]{{
                                                                    add("delectus"),
                                                                }};
                                                                s = "tempora";
                                                                ss = new String[]{{
                                                                    add("molestiae"),
                                                                    add("minus"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "placeat";
                                                                bs = new String[]{{
                                                                    add("iusto"),
                                                                    add("excepturi"),
                                                                    add("nisi"),
                                                                }};
                                                                n = "recusandae";
                                                                ns = new String[]{{
                                                                    add("ab"),
                                                                    add("quis"),
                                                                    add("veritatis"),
                                                                    add("deserunt"),
                                                                }};
                                                                s = "perferendis";
                                                                ss = new String[]{{
                                                                    add("repellendus"),
                                                                    add("sapiente"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "dolor";
                                                                            bs = new String[]{{
                                                                                add("laboriosam"),
                                                                                add("hic"),
                                                                                add("saepe"),
                                                                            }};
                                                                            n = "fuga";
                                                                            ns = new String[]{{
                                                                                add("corporis"),
                                                                                add("iste"),
                                                                            }};
                                                                            s = "iure";
                                                                            ss = new String[]{{
                                                                                add("quidem"),
                                                                                add("architecto"),
                                                                                add("ipsa"),
                                                                                add("reiciendis"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "occaecati";
                                                                bs = new String[]{{
                                                                    add("deleniti"),
                                                                }};
                                                                n = "hic";
                                                                ns = new String[]{{
                                                                    add("totam"),
                                                                    add("beatae"),
                                                                    add("commodi"),
                                                                    add("molestiae"),
                                                                }};
                                                                s = "modi";
                                                                ss = new String[]{{
                                                                    add("impedit"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "cum";
                                                                bs = new String[]{{
                                                                    add("ipsum"),
                                                                    add("excepturi"),
                                                                }};
                                                                n = "aspernatur";
                                                                ns = new String[]{{
                                                                    add("ad"),
                                                                }};
                                                                s = "natus";
                                                                ss = new String[]{{
                                                                    add("iste"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }});
                                                put("aliquid", new KeysAndAttributes(                new org.openapis.openapi.models.shared.Key[]{{
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "eius";
                                                                                        bs = new String[]{{
                                                                                            add("deleniti"),
                                                                                            add("facilis"),
                                                                                            add("in"),
                                                                                            add("architecto"),
                                                                                        }};
                                                                                        n = "architecto";
                                                                                        ns = new String[]{{
                                                                                            add("ullam"),
                                                                                            add("expedita"),
                                                                                            add("nihil"),
                                                                                            add("repellat"),
                                                                                        }};
                                                                                        s = "quibusdam";
                                                                                        ss = new String[]{{
                                                                                            add("saepe"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "natus";
                                                                            bs = new String[]{{
                                                                                add("eum"),
                                                                                add("vero"),
                                                                                add("aspernatur"),
                                                                            }};
                                                                            n = "architecto";
                                                                            ns = new String[]{{
                                                                                add("et"),
                                                                                add("excepturi"),
                                                                            }};
                                                                            s = "ullam";
                                                                            ss = new String[]{{
                                                                                add("quos"),
                                                                                add("sint"),
                                                                                add("accusantium"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "mollitia";
                                                                            bs = new String[]{{
                                                                                add("mollitia"),
                                                                                add("ad"),
                                                                                add("eum"),
                                                                                add("dolor"),
                                                                            }};
                                                                            n = "necessitatibus";
                                                                            ns = new String[]{{
                                                                                add("nemo"),
                                                                            }};
                                                                            s = "quasi";
                                                                            ss = new String[]{{
                                                                                add("doloribus"),
                                                                                add("debitis"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "nemo";
                                                                                        bs = new String[]{{
                                                                                            add("perferendis"),
                                                                                            add("fugiat"),
                                                                                            add("amet"),
                                                                                            add("aut"),
                                                                                        }};
                                                                                        n = "cumque";
                                                                                        ns = new String[]{{
                                                                                            add("hic"),
                                                                                            add("libero"),
                                                                                        }};
                                                                                        s = "nobis";
                                                                                        ss = new String[]{{
                                                                                            add("quis"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "pariatur";
                                                                            bs = new String[]{{
                                                                                add("consequuntur"),
                                                                            }};
                                                                            n = "praesentium";
                                                                            ns = new String[]{{
                                                                                add("magni"),
                                                                                add("sunt"),
                                                                                add("quo"),
                                                                            }};
                                                                            s = "illum";
                                                                            ss = new String[]{{
                                                                                add("maxime"),
                                                                                add("ea"),
                                                                                add("excepturi"),
                                                                                add("odit"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "ea";
                                                                            bs = new String[]{{
                                                                                add("ab"),
                                                                            }};
                                                                            n = "maiores";
                                                                            ns = new String[]{{
                                                                                add("ipsam"),
                                                                                add("voluptate"),
                                                                                add("autem"),
                                                                            }};
                                                                            s = "nam";
                                                                            ss = new String[]{{
                                                                                add("pariatur"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    attributesToGet = new String[]{{
                                                        add("necessitatibus"),
                                                        add("sint"),
                                                        add("officia"),
                                                    }};
                                                    consistentRead = false;
                                                    keys = new org.openapis.openapi.models.shared.Key[]{{
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "deserunt";
                                                                            bs = new String[]{{
                                                                                add("vel"),
                                                                                add("natus"),
                                                                            }};
                                                                            n = "omnis";
                                                                            ns = new String[]{{
                                                                                add("perferendis"),
                                                                                add("nihil"),
                                                                            }};
                                                                            s = "magnam";
                                                                            ss = new String[]{{
                                                                                add("id"),
                                                                                add("labore"),
                                                                                add("labore"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "debitis";
                                                                bs = new String[]{{
                                                                    add("dolorum"),
                                                                    add("in"),
                                                                    add("in"),
                                                                    add("illum"),
                                                                }};
                                                                n = "maiores";
                                                                ns = new String[]{{
                                                                    add("dicta"),
                                                                    add("magnam"),
                                                                    add("cumque"),
                                                                }};
                                                                s = "facere";
                                                                ss = new String[]{{
                                                                    add("aliquid"),
                                                                    add("laborum"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "accusamus";
                                                                bs = new String[]{{
                                                                    add("occaecati"),
                                                                }};
                                                                n = "enim";
                                                                ns = new String[]{{
                                                                    add("delectus"),
                                                                    add("quidem"),
                                                                    add("provident"),
                                                                    add("nam"),
                                                                }};
                                                                s = "id";
                                                                ss = new String[]{{
                                                                    add("deleniti"),
                                                                    add("sapiente"),
                                                                    add("amet"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }});
                                                put("totam", new KeysAndAttributes(                new org.openapis.openapi.models.shared.Key[]{{
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "deleniti";
                                                                                        bs = new String[]{{
                                                                                            add("necessitatibus"),
                                                                                            add("distinctio"),
                                                                                            add("asperiores"),
                                                                                        }};
                                                                                        n = "nihil";
                                                                                        ns = new String[]{{
                                                                                            add("voluptate"),
                                                                                        }};
                                                                                        s = "id";
                                                                                        ss = new String[]{{
                                                                                            add("eius"),
                                                                                            add("aspernatur"),
                                                                                            add("perferendis"),
                                                                                            add("amet"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "excepturi";
                                                                            bs = new String[]{{
                                                                                add("voluptate"),
                                                                                add("dignissimos"),
                                                                                add("reiciendis"),
                                                                            }};
                                                                            n = "amet";
                                                                            ns = new String[]{{
                                                                                add("numquam"),
                                                                                add("veritatis"),
                                                                                add("ipsa"),
                                                                            }};
                                                                            s = "ipsa";
                                                                            ss = new String[]{{
                                                                                add("odio"),
                                                                                add("quaerat"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "accusamus";
                                                                            bs = new String[]{{
                                                                                add("voluptatibus"),
                                                                                add("voluptas"),
                                                                                add("natus"),
                                                                            }};
                                                                            n = "eos";
                                                                            ns = new String[]{{
                                                                                add("sit"),
                                                                                add("fugiat"),
                                                                                add("ab"),
                                                                            }};
                                                                            s = "soluta";
                                                                            ss = new String[]{{
                                                                                add("iusto"),
                                                                                add("voluptate"),
                                                                                add("dolorum"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "ipsum";
                                                                                        bs = new String[]{{
                                                                                            add("tenetur"),
                                                                                            add("amet"),
                                                                                            add("tempore"),
                                                                                            add("accusamus"),
                                                                                        }};
                                                                                        n = "numquam";
                                                                                        ns = new String[]{{
                                                                                            add("dolorem"),
                                                                                            add("sapiente"),
                                                                                        }};
                                                                                        s = "totam";
                                                                                        ss = new String[]{{
                                                                                            add("sit"),
                                                                                            add("expedita"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "optio";
                                                                            bs = new String[]{{
                                                                                add("ad"),
                                                                                add("saepe"),
                                                                                add("suscipit"),
                                                                                add("deserunt"),
                                                                            }};
                                                                            n = "provident";
                                                                            ns = new String[]{{
                                                                                add("repellendus"),
                                                                                add("totam"),
                                                                            }};
                                                                            s = "similique";
                                                                            ss = new String[]{{
                                                                                add("at"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "quaerat";
                                                                            bs = new String[]{{
                                                                                add("vel"),
                                                                                add("quod"),
                                                                            }};
                                                                            n = "officiis";
                                                                            ns = new String[]{{
                                                                                add("dolorum"),
                                                                            }};
                                                                            s = "a";
                                                                            ss = new String[]{{
                                                                                add("harum"),
                                                                                add("iusto"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "temporibus";
                                                                                        bs = new String[]{{
                                                                                            add("neque"),
                                                                                        }};
                                                                                        n = "fugit";
                                                                                        ns = new String[]{{
                                                                                            add("odio"),
                                                                                        }};
                                                                                        s = "sunt";
                                                                                        ss = new String[]{{
                                                                                            add("nam"),
                                                                                            add("hic"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "neque";
                                                                            bs = new String[]{{
                                                                                add("vel"),
                                                                            }};
                                                                            n = "libero";
                                                                            ns = new String[]{{
                                                                                add("deserunt"),
                                                                                add("quam"),
                                                                            }};
                                                                            s = "ipsum";
                                                                            ss = new String[]{{
                                                                                add("qui"),
                                                                                add("cupiditate"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "maxime";
                                                                            bs = new String[]{{
                                                                                add("soluta"),
                                                                                add("dicta"),
                                                                                add("laborum"),
                                                                                add("totam"),
                                                                            }};
                                                                            n = "incidunt";
                                                                            ns = new String[]{{
                                                                                add("dolores"),
                                                                            }};
                                                                            s = "distinctio";
                                                                            ss = new String[]{{
                                                                                add("aliquid"),
                                                                                add("quam"),
                                                                                add("molestias"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "repellendus";
                                                                                        bs = new String[]{{
                                                                                            add("doloribus"),
                                                                                            add("ut"),
                                                                                            add("facilis"),
                                                                                            add("cupiditate"),
                                                                                        }};
                                                                                        n = "qui";
                                                                                        ns = new String[]{{
                                                                                            add("laudantium"),
                                                                                        }};
                                                                                        s = "odio";
                                                                                        ss = new String[]{{
                                                                                            add("voluptatibus"),
                                                                                            add("quisquam"),
                                                                                            add("vero"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "voluptatem";
                                                                            bs = new String[]{{
                                                                                add("soluta"),
                                                                                add("nobis"),
                                                                                add("et"),
                                                                                add("saepe"),
                                                                            }};
                                                                            n = "ipsum";
                                                                            ns = new String[]{{
                                                                                add("nobis"),
                                                                            }};
                                                                            s = "quos";
                                                                            ss = new String[]{{
                                                                                add("cupiditate"),
                                                                                add("aperiam"),
                                                                                add("delectus"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "dolorem";
                                                                            bs = new String[]{{
                                                                                add("labore"),
                                                                                add("adipisci"),
                                                                            }};
                                                                            n = "dolorum";
                                                                            ns = new String[]{{
                                                                                add("quae"),
                                                                            }};
                                                                            s = "aut";
                                                                            ss = new String[]{{
                                                                                add("itaque"),
                                                                                add("consequatur"),
                                                                                add("est"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    attributesToGet = new String[]{{
                                                        add("eaque"),
                                                        add("quis"),
                                                    }};
                                                    consistentRead = false;
                                                    keys = new org.openapis.openapi.models.shared.Key[]{{
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "provident";
                                                                            bs = new String[]{{
                                                                                add("libero"),
                                                                                add("delectus"),
                                                                                add("quaerat"),
                                                                                add("quos"),
                                                                            }};
                                                                            n = "aliquid";
                                                                            ns = new String[]{{
                                                                                add("dolorem"),
                                                                            }};
                                                                            s = "dolor";
                                                                            ss = new String[]{{
                                                                                add("ipsum"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "eos";
                                                                bs = new String[]{{
                                                                    add("dolores"),
                                                                }};
                                                                n = "minus";
                                                                ns = new String[]{{
                                                                    add("dolor"),
                                                                    add("vero"),
                                                                }};
                                                                s = "nostrum";
                                                                ss = new String[]{{
                                                                    add("recusandae"),
                                                                    add("omnis"),
                                                                    add("facilis"),
                                                                    add("perspiciatis"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "voluptatem";
                                                                bs = new String[]{{
                                                                    add("consequuntur"),
                                                                    add("blanditiis"),
                                                                    add("error"),
                                                                    add("eaque"),
                                                                }};
                                                                n = "occaecati";
                                                                ns = new String[]{{
                                                                    add("adipisci"),
                                                                    add("asperiores"),
                                                                    add("earum"),
                                                                }};
                                                                s = "modi";
                                                                ss = new String[]{{
                                                                    add("dolorum"),
                                                                    add("deleniti"),
                                                                    add("pariatur"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }});
                                            }});, BatchGetItemXAmzTargetEnum.DYNAMO_DB20111205_BATCH_GET_ITEM) {{
                requestItems = "omnis";
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "delectus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "tenetur";
            }};            

            BatchGetItemResponse res = sdk.batchGetItem(req);

            if (res.batchGetItemOutput != null) {
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

* [batchGetItem](docs/sdk/README.md#batchgetitem) - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* [batchWriteItem](docs/sdk/README.md#batchwriteitem) - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* [createTable](docs/sdk/README.md#createtable) - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* [deleteItem](docs/sdk/README.md#deleteitem) - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* [deleteTable](docs/sdk/README.md#deletetable) - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [describeTable](docs/sdk/README.md#describetable) - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [getItem](docs/sdk/README.md#getitem) - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* [listTables](docs/sdk/README.md#listtables) - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* [putItem](docs/sdk/README.md#putitem) - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* [query](docs/sdk/README.md#query) - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* [scan](docs/sdk/README.md#scan) - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* [updateItem](docs/sdk/README.md#updateitem) - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* [updateTable](docs/sdk/README.md#updatetable) - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
