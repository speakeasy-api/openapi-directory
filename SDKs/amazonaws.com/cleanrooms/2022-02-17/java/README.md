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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchGetSchemaRequestBody;
import org.openapis.openapi.models.operations.BatchGetSchemaRequest;
import org.openapis.openapi.models.operations.BatchGetSchemaResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetSchemaRequest req = new BatchGetSchemaRequest() {{
                requestBody = new BatchGetSchemaRequestBody() {{
                    names = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                collaborationIdentifier = "suscipit";
            }}            

            BatchGetSchemaResponse res = sdk.batchGetSchema(req);

            if (res.batchGetSchemaOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchGetSchema` - Retrieves multiple schemas by their identifiers.
* `createCollaboration` - Creates a new collaboration.
* `createConfiguredTable` - Creates a new configured table resource.
* `createConfiguredTableAnalysisRule` - Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
* `createConfiguredTableAssociation` - Creates a configured table association. A configured table association links a configured table with a collaboration.
* `createMembership` - Creates a membership for a specific collaboration identifier and joins the collaboration.
* `deleteCollaboration` - Deletes a collaboration. It can only be called by the collaboration owner.
* `deleteConfiguredTable` - Deletes a configured table.
* `deleteConfiguredTableAnalysisRule` - Deletes a configured table analysis rule.
* `deleteConfiguredTableAssociation` - Deletes a configured table association.
* `deleteMember` - Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
* `deleteMembership` - Deletes a specified membership. All resources under a membership must be deleted.
* `getCollaboration` - Returns metadata about a collaboration.
* `getConfiguredTable` - Retrieves a configured table.
* `getConfiguredTableAnalysisRule` - Retrieves a configured table analysis rule.
* `getConfiguredTableAssociation` - Retrieves a configured table association.
* `getMembership` - Retrieves a specified membership for an identifier.
* `getProtectedQuery` - Returns query processing metadata.
* `getSchema` - Retrieves the schema for a relation within a collaboration.
* `getSchemaAnalysisRule` - Retrieves a schema analysis rule.
* `listCollaborations` - Lists collaborations the caller owns, is active in, or has been invited to.
* `listConfiguredTableAssociations` - Lists configured table associations for a membership.
* `listConfiguredTables` - Lists configured tables.
* `listMembers` - Lists all members within a collaboration.
* `listMemberships` - Lists all memberships resources within the caller's account.
* `listProtectedQueries` - Lists protected queries, sorted by the most recent query.
* `listSchemas` - Lists the schemas for relations within a collaboration.
* `listTagsForResource` - Lists all of the tags that have been added to a resource.
* `startProtectedQuery` - Creates a protected query that is started by AWS Clean Rooms.
* `tagResource` - Tags a resource.
* `untagResource` - Removes a tag or list of tags from a resource.
* `updateCollaboration` - Updates collaboration metadata and can only be called by the collaboration owner.
* `updateConfiguredTable` - Updates a configured table.
* `updateConfiguredTableAnalysisRule` - Updates a configured table analysis rule.
* `updateConfiguredTableAssociation` - Updates a configured table association.
* `updateMembership` - Updates a membership.
* `updateProtectedQuery` - Updates the processing of a currently running query.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
