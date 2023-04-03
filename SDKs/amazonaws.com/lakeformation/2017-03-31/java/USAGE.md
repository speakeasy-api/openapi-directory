<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequestBodyResource;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequestBody;
import org.openapis.openapi.models.operations.AddLFTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddLFTagsToResourceResponse;
import org.openapis.openapi.models.shared.TableWithColumnsResource;
import org.openapis.openapi.models.shared.ColumnWildcard;
import org.openapis.openapi.models.shared.TableResource;
import org.openapis.openapi.models.shared.LFTagPolicyResource;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.LFTag;
import org.openapis.openapi.models.shared.LFTagKeyResource;
import org.openapis.openapi.models.shared.DatabaseResource;
import org.openapis.openapi.models.shared.DataLocationResource;
import org.openapis.openapi.models.shared.DataCellsFilterResource;
import org.openapis.openapi.models.shared.LFTagPair;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddLFTagsToResourceRequest req = new AddLFTagsToResourceRequest() {{
                requestBody = new AddLFTagsToResourceRequestBody() {{
                    catalogId = "corrupti";
                    lfTags = new org.openapis.openapi.models.shared.LFTagPair[]{{
                        add(new LFTagPair() {{
                            catalogId = "distinctio";
                            tagKey = "quibusdam";
                            tagValues = new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                        }}),
                        add(new LFTagPair() {{
                            catalogId = "vel";
                            tagKey = "error";
                            tagValues = new String[]{{
                                add("suscipit"),
                                add("iure"),
                                add("magnam"),
                            }};
                        }}),
                        add(new LFTagPair() {{
                            catalogId = "debitis";
                            tagKey = "ipsa";
                            tagValues = new String[]{{
                                add("tempora"),
                                add("suscipit"),
                                add("molestiae"),
                                add("minus"),
                            }};
                        }}),
                    }};
                    resource = new AddLFTagsToResourceRequestBodyResource() {{
                        catalog = new java.util.HashMap<String, Object>() {{
                            put("voluptatum", "iusto");
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
                            put("ab", "quis");
                        }};
                        dataCellsFilter = new DataCellsFilterResource() {{
                            databaseName = "veritatis";
                            name = "deserunt";
                            tableCatalogId = "perferendis";
                            tableName = "ipsam";
                        }};
                        dataLocation = new DataLocationResource() {{
                            catalogId = "repellendus";
                            resourceArn = "sapiente";
                        }};
                        database = new DatabaseResource() {{
                            catalogId = "quo";
                            name = "odit";
                        }};
                        lfTag = new LFTagKeyResource() {{
                            catalogId = "at";
                            tagKey = "at";
                            tagValues = new String[]{{
                                add("molestiae"),
                                add("quod"),
                                add("quod"),
                                add("esse"),
                            }};
                        }};
                        lfTagPolicy = new LFTagPolicyResource() {{
                            catalogId = "totam";
                            expression = new org.openapis.openapi.models.shared.LFTag[]{{
                                add(new LFTag() {{
                                    tagKey = "dolorum";
                                    tagValues = new String[]{{
                                        add("nam"),
                                    }};
                                }}),
                                add(new LFTag() {{
                                    tagKey = "officia";
                                    tagValues = new String[]{{
                                        add("fugit"),
                                        add("deleniti"),
                                        add("hic"),
                                    }};
                                }}),
                                add(new LFTag() {{
                                    tagKey = "optio";
                                    tagValues = new String[]{{
                                        add("beatae"),
                                        add("commodi"),
                                        add("molestiae"),
                                    }};
                                }}),
                                add(new LFTag() {{
                                    tagKey = "modi";
                                    tagValues = new String[]{{
                                        add("impedit"),
                                    }};
                                }}),
                            }};
                            resourceType = "TABLE";
                        }};
                        table = new TableResource() {{
                            catalogId = "esse";
                            databaseName = "ipsum";
                            name = "excepturi";
                            tableWildcard = new java.util.HashMap<String, Object>() {{
                                put("perferendis", "ad");
                            }};
                        }};
                        tableWithColumns = new TableWithColumnsResource() {{
                            catalogId = "natus";
                            columnNames = new String[]{{
                                add("iste"),
                            }};
                            columnWildcard = new ColumnWildcard() {{
                                excludedColumnNames = new String[]{{
                                    add("natus"),
                                }};
                            }};
                            databaseName = "laboriosam";
                            name = "hic";
                        }};
                    }};
                }};
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }}            

            AddLFTagsToResourceResponse res = sdk.addLFTagsToResource(req);

            if (res.addLFTagsToResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->