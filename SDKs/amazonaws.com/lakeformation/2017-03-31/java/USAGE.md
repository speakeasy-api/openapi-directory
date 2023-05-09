<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequestBody;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequestBodyResource;
import org.openapis.openapi.models.operations.AddLFTagsToResourceResponse;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.LFTagPair;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.TableWithColumnsResource;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddLFTagsToResourceRequest req = new AddLFTagsToResourceRequest(                new AddLFTagsToResourceRequestBody(                new org.openapis.openapi.models.shared.LFTagPair[]{{
                                                add(new LFTagPair("vel",                 new String[]{{
                                                                    add("deserunt"),
                                                                    add("suscipit"),
                                                                    add("iure"),
                                                                }}) {{
                                                    catalogId = "distinctio";
                                                    tagKey = "quibusdam";
                                                    tagValues = new String[]{{
                                                        add("nulla"),
                                                        add("corrupti"),
                                                        add("illum"),
                                                    }};
                                                }}),
                                                add(new LFTagPair("tempora",                 new String[]{{
                                                                    add("molestiae"),
                                                                    add("minus"),
                                                                }}) {{
                                                    catalogId = "magnam";
                                                    tagKey = "debitis";
                                                    tagValues = new String[]{{
                                                        add("delectus"),
                                                    }};
                                                }}),
                                                add(new LFTagPair("recusandae",                 new String[]{{
                                                                    add("ab"),
                                                                    add("quis"),
                                                                    add("veritatis"),
                                                                    add("deserunt"),
                                                                }}) {{
                                                    catalogId = "placeat";
                                                    tagKey = "voluptatum";
                                                    tagValues = new String[]{{
                                                        add("excepturi"),
                                                        add("nisi"),
                                                    }};
                                                }}),
                                            }},                 new AddLFTagsToResourceRequestBodyResource() {{
                                                catalog = new java.util.HashMap<String, Object>() {{
                                                    put("ipsam", "repellendus");
                                                }};
                                                dataCellsFilter = new DataCellsFilterResource() {{
                                                    databaseName = "sapiente";
                                                    name = "Fred Strosin";
                                                    tableCatalogId = "molestiae";
                                                    tableName = "quod";
                                                }};;
                                                dataLocation = new DataLocationResource("quod") {{
                                                    catalogId = "esse";
                                                }};;
                                                database = new DatabaseResource("totam") {{
                                                    catalogId = "porro";
                                                }};;
                                                lfTag = new LFTagKeyResource("dolorum",                 new String[]{{
                                                                    add("nam"),
                                                                }}) {{
                                                    catalogId = "officia";
                                                }};;
                                                lfTagPolicy = new LFTagPolicyResource(                new org.openapis.openapi.models.shared.LFTag[]{{
                                                                    add(new LFTag("beatae",                 new String[]{{
                                                                                        add("molestiae"),
                                                                                        add("modi"),
                                                                                    }}) {{
                                                                        tagKey = "fugit";
                                                                        tagValues = new String[]{{
                                                                            add("hic"),
                                                                            add("optio"),
                                                                            add("totam"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("aspernatur",                 new String[]{{
                                                                                        add("ad"),
                                                                                    }}) {{
                                                                        tagKey = "qui";
                                                                        tagValues = new String[]{{
                                                                            add("cum"),
                                                                            add("esse"),
                                                                            add("ipsum"),
                                                                            add("excepturi"),
                                                                        }};
                                                                    }}),
                                                                    add(new LFTag("dolor",                 new String[]{{
                                                                                        add("laboriosam"),
                                                                                        add("hic"),
                                                                                        add("saepe"),
                                                                                    }}) {{
                                                                        tagKey = "natus";
                                                                        tagValues = new String[]{{
                                                                            add("iste"),
                                                                        }};
                                                                    }}),
                                                                }}, ResourceTypeEnum.TABLE) {{
                                                    catalogId = "in";
                                                }};;
                                                table = new TableResource("corporis") {{
                                                    catalogId = "iste";
                                                    name = "Mr. Kerry Predovic";
                                                    tableWildcard = new java.util.HashMap<String, Object>() {{
                                                        put("mollitia", "laborum");
                                                        put("dolores", "dolorem");
                                                        put("corporis", "explicabo");
                                                    }};
                                                }};;
                                                tableWithColumns = new TableWithColumnsResource("nobis", "enim") {{
                                                    catalogId = "omnis";
                                                    columnNames = new String[]{{
                                                        add("minima"),
                                                        add("excepturi"),
                                                    }};
                                                    columnWildcard = new ColumnWildcard() {{
                                                        excludedColumnNames = new String[]{{
                                                            add("iure"),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                catalogId = "culpa";
                            }};) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            AddLFTagsToResourceResponse res = sdk.addLFTagsToResource(req);

            if (res.addLFTagsToResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->