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