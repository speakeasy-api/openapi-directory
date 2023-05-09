# sections

## Overview

A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.

Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.

The ‘memberships’ property when [getting a task](/docs/get-a-task) will return the information for the section or the column under ‘section’ in the response.

### Available Operations

* [addTaskForSection](#addtaskforsection) - Add task to section
* [createSectionForProject](#createsectionforproject) - Create a section in a project
* [deleteSection](#deletesection) - Delete a section
* [getSection](#getsection) - Get a section
* [getSectionsForProject](#getsectionsforproject) - Get sections in a project
* [insertSectionForProject](#insertsectionforproject) - Move or Insert sections
* [updateSection](#updatesection) - Update a section

## addTaskForSection

Add a task to a specific, existing section. This will remove the task from other sections of the project.

The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.

This does not work for separators (tasks with the resource_subtype of section).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTaskForSectionRequest;
import org.openapis.openapi.models.operations.AddTaskForSectionRequestBody;
import org.openapis.openapi.models.operations.AddTaskForSectionResponse;
import org.openapis.openapi.models.shared.SectionTaskInsertRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddTaskForSectionRequest req = new AddTaskForSectionRequest(                new AddTaskForSectionRequestBody() {{
                                data = new SectionTaskInsertRequest("123456") {{
                                    insertAfter = "987654";
                                    insertBefore = "86420";
                                }};;
                            }};, "quas") {{
                optFields = new String[]{{
                    add("consequatur"),
                    add("est"),
                    add("repellendus"),
                    add("porro"),
                }};
                optPretty = false;
            }};            

            AddTaskForSectionResponse res = sdk.sections.addTaskForSection(req);

            if (res.addTaskForSection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSectionForProject

Creates a new section in a project.
Returns the full record of the newly created section.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSectionForProjectRequest;
import org.openapis.openapi.models.operations.CreateSectionForProjectRequestBody;
import org.openapis.openapi.models.operations.CreateSectionForProjectResponse;
import org.openapis.openapi.models.shared.SectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateSectionForProjectRequest req = new CreateSectionForProjectRequest(                new CreateSectionForProjectRequestBody() {{
                                data = new SectionRequest("Next Actions") {{
                                    insertAfter = "987654";
                                    insertBefore = "86420";
                                }};;
                            }};, "doloribus") {{
                optFields = new String[]{{
                    add("facilis"),
                    add("cupiditate"),
                }};
                optPretty = false;
            }};            

            CreateSectionForProjectResponse res = sdk.sections.createSectionForProject(req);

            if (res.createSectionForProject201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSection

A specific, existing section can be deleted by making a DELETE request on
the URL for that section.

Note that sections must be empty to be deleted.

The last remaining section cannot be deleted.

Returns an empty data block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSectionRequest;
import org.openapis.openapi.models.operations.DeleteSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSectionRequest req = new DeleteSectionRequest("qui") {{
                optFields = new String[]{{
                    add("laudantium"),
                }};
                optPretty = false;
            }};            

            DeleteSectionResponse res = sdk.sections.deleteSection(req);

            if (res.deleteSection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSection

Returns the complete record for a single section.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionRequest;
import org.openapis.openapi.models.operations.GetSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSectionRequest req = new GetSectionRequest("odio") {{
                optFields = new String[]{{
                    add("voluptatibus"),
                    add("quisquam"),
                    add("vero"),
                }};
                optPretty = false;
            }};            

            GetSectionResponse res = sdk.sections.getSection(req);

            if (res.getSection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSectionsForProject

Returns the compact records for all sections in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSectionsForProjectRequest;
import org.openapis.openapi.models.operations.GetSectionsForProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSectionsForProjectRequest req = new GetSectionsForProjectRequest("omnis") {{
                limit = 338159L;
                offset = "ipsum";
                optFields = new String[]{{
                    add("voluptate"),
                    add("consectetur"),
                    add("vero"),
                    add("tenetur"),
                }};
                optPretty = false;
            }};            

            GetSectionsForProjectResponse res = sdk.sections.getSectionsForProject(req);

            if (res.getSectionsForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insertSectionForProject

Move sections relative to each other. One of
`before_section` or `after_section` is required.

Sections cannot be moved between projects.

Returns an empty data block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsertSectionForProjectRequest;
import org.openapis.openapi.models.operations.InsertSectionForProjectRequestBody;
import org.openapis.openapi.models.operations.InsertSectionForProjectResponse;
import org.openapis.openapi.models.shared.ProjectSectionInsertRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            InsertSectionForProjectRequest req = new InsertSectionForProjectRequest(                new InsertSectionForProjectRequestBody() {{
                                data = new ProjectSectionInsertRequest("123456", "321654") {{
                                    afterSection = "987654";
                                    beforeSection = "86420";
                                }};;
                            }};, "dignissimos") {{
                optFields = new String[]{{
                    add("distinctio"),
                    add("quod"),
                    add("odio"),
                    add("similique"),
                }};
                optPretty = false;
            }};            

            InsertSectionForProjectResponse res = sdk.sections.insertSectionForProject(req);

            if (res.insertSectionForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSection

A specific, existing section can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged. (note that
at this time, the only field that can be updated is the `name` field.)

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated section record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSectionRequest;
import org.openapis.openapi.models.operations.UpdateSectionRequestBody;
import org.openapis.openapi.models.operations.UpdateSectionResponse;
import org.openapis.openapi.models.shared.SectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateSectionRequest req = new UpdateSectionRequest(                new UpdateSectionRequestBody() {{
                                data = new SectionRequest("Next Actions") {{
                                    insertAfter = "987654";
                                    insertBefore = "86420";
                                }};;
                            }};, "facilis") {{
                optFields = new String[]{{
                    add("ducimus"),
                    add("dolore"),
                    add("quibusdam"),
                    add("illum"),
                }};
                optPretty = false;
            }};            

            UpdateSectionResponse res = sdk.sections.updateSection(req);

            if (res.updateSection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
