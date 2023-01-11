<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AddLfTagsToResourceRequest req = new AddLfTagsToResourceRequest() {{
                headers = new AddLfTagsToResourceHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSLakeFormation.AddLFTagsToResource";
                }};
                request = new AddLfTagsToResourceRequest() {{
                    catalogId = "fugit";
                    lfTags = new openapisdk.models.shared.LfTagPair[]() {{
                        add(new LfTagPair() {{
                            catalogId = "nihil";
                            tagKey = "rerum";
                            tagValues = new String[]() {{
                                add("debitis"),
                                add("voluptatum"),
                                add("et"),
                            }};
                        }}),
                    }};
                    resource = new Resource() {{
                        catalog = new java.util.HashMap<String, Object>() {{
                            put("dolorem", "et");
                            put("voluptate", "iste");
                            put("vitae", "totam");
                        }};
                        dataLocation = new DataLocationResource() {{
                            catalogId = "dolores";
                            resourceArn = "illum";
                        }};
                        database = new DatabaseResource() {{
                            catalogId = "debitis";
                            name = "vel";
                        }};
                        lfTag = new LfTagKeyResource() {{
                            catalogId = "odio";
                            tagKey = "dolore";
                            tagValues = new String[]() {{
                                add("aspernatur"),
                                add("accusantium"),
                            }};
                        }};
                        lfTagPolicy = new LfTagPolicyResource() {{
                            catalogId = "totam";
                            expression = new openapisdk.models.shared.LfTag[]() {{
                                add(new LfTag() {{
                                    tagKey = "quis";
                                    tagValues = new String[]() {{
                                        add("aut"),
                                        add("odit"),
                                    }};
                                }}),
                                add(new LfTag() {{
                                    tagKey = "non";
                                    tagValues = new String[]() {{
                                        add("omnis"),
                                    }};
                                }}),
                            }};
                            resourceType = "DATABASE";
                        }};
                        table = new TableResource() {{
                            catalogId = "illo";
                            databaseName = "sed";
                            name = "officiis";
                            tableWildcard = new java.util.HashMap<String, Object>() {{
                                put("consectetur", "nobis");
                                put("odio", "qui");
                            }};
                        }};
                        tableWithColumns = new TableWithColumnsResource() {{
                            catalogId = "recusandae";
                            columnNames = new String[]() {{
                                add("ipsum"),
                                add("eveniet"),
                            }};
                            columnWildcard = new ColumnWildcard() {{
                                excludedColumnNames = new String[]() {{
                                    add("sint"),
                                    add("inventore"),
                                }};
                            }};
                            databaseName = "ut";
                            name = "exercitationem";
                        }};
                    }};
                }};
            }};

            AddLfTagsToResourceResponse res = sdk.addLfTagsToResource(req);

            if (res.addLFTagsToResourceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->