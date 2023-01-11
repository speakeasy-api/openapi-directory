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
                    xAmzAlgorithm = "velit";
                    xAmzContentSha256 = "maiores";
                    xAmzCredential = "sunt";
                    xAmzDate = "et";
                    xAmzSecurityToken = "est";
                    xAmzSignature = "reprehenderit";
                    xAmzSignedHeaders = "totam";
                    xAmzTarget = "AWSLakeFormation.AddLFTagsToResource";
                }};
                request = new AddLfTagsToResourceRequest() {{
                    catalogId = "voluptas";
                    lfTags = new openapisdk.models.shared.LfTagPair[]() {{
                        add(new LfTagPair() {{
                            catalogId = "consequatur";
                            tagKey = "veritatis";
                            tagValues = new String[]() {{
                                add("et"),
                                add("nisi"),
                                add("cupiditate"),
                            }};
                        }}),
                    }};
                    resource = new Resource() {{
                        catalog = new java.util.HashMap<String, Object>() {{
                            put("quos", "et");
                        }};
                        dataLocation = new DataLocationResource() {{
                            catalogId = "perspiciatis";
                            resourceArn = "quo";
                        }};
                        database = new DatabaseResource() {{
                            catalogId = "nulla";
                            name = "modi";
                        }};
                        lfTag = new LfTagKeyResource() {{
                            catalogId = "est";
                            tagKey = "impedit";
                            tagValues = new String[]() {{
                                add("qui"),
                                add("ut"),
                            }};
                        }};
                        lfTagPolicy = new LfTagPolicyResource() {{
                            catalogId = "possimus";
                            expression = new openapisdk.models.shared.LfTag[]() {{
                                add(new LfTag() {{
                                    tagKey = "iusto";
                                    tagValues = new String[]() {{
                                        add("qui"),
                                    }};
                                }}),
                            }};
                            resourceType = "TABLE";
                        }};
                        table = new TableResource() {{
                            catalogId = "totam";
                            databaseName = "at";
                            name = "aliquam";
                            tableWildcard = new java.util.HashMap<String, Object>() {{
                                put("inventore", "esse");
                                put("consectetur", "cumque");
                                put("fugit", "qui");
                            }};
                        }};
                        tableWithColumns = new TableWithColumnsResource() {{
                            catalogId = "quia";
                            columnNames = new String[]() {{
                                add("incidunt"),
                            }};
                            columnWildcard = new ColumnWildcard() {{
                                excludedColumnNames = new String[]() {{
                                    add("neque"),
                                }};
                            }};
                            databaseName = "alias";
                            name = "tempore";
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