# tasks

## Overview

The task is the basic object around which many operations in Asana are centered. In the Asana application, multiple tasks populate the middle pane according to some view parameters, and the set of selected tasks determines the more detailed information presented in the details pane.

Sections are unique in that they will be included in the `memberships` field of task objects returned in the API when the task is within a section. They can also be used to manipulate the ordering of a task within a project.

[Queries](/docs/get-multiple-tasks) return a [compact representation of each task object](/docs/task-compact). To retrieve *all* fields or *specific set* of the fields, use [field selectors](/docs/input-output-options) to manipulate what data is included in a response.

### Available Operations

* [addDependenciesForTask](#adddependenciesfortask) - Set dependencies for a task
* [addDependentsForTask](#adddependentsfortask) - Set dependents for a task
* [addFollowersForTask](#addfollowersfortask) - Add followers to a task
* [addProjectForTask](#addprojectfortask) - Add a project to a task
* [addTagForTask](#addtagfortask) - Add a tag to a task
* [createSubtaskForTask](#createsubtaskfortask) - Create a subtask
* [createTask](#createtask) - Create a task
* [deleteTask](#deletetask) - Delete a task
* [duplicateTask](#duplicatetask) - Duplicate a task
* [getDependenciesForTask](#getdependenciesfortask) - Get dependencies from a task
* [getDependentsForTask](#getdependentsfortask) - Get dependents from a task
* [getSubtasksForTask](#getsubtasksfortask) - Get subtasks from a task
* [getTask](#gettask) - Get a task
* [getTasks](#gettasks) - Get multiple tasks
* [getTasksForProject](#gettasksforproject) - Get tasks from a project
* [getTasksForSection](#gettasksforsection) - Get tasks from a section
* [getTasksForTag](#gettasksfortag) - Get tasks from a tag
* [getTasksForUserTaskList](#gettasksforusertasklist) - Get tasks from a user task list
* [removeDependenciesForTask](#removedependenciesfortask) - Unlink dependencies from a task
* [removeDependentsForTask](#removedependentsfortask) - Unlink dependents from a task
* [removeFollowerForTask](#removefollowerfortask) - Remove followers from a task
* [removeProjectForTask](#removeprojectfortask) - Remove a project from a task
* [removeTagForTask](#removetagfortask) - Remove a tag from a task
* [searchTasksForWorkspace](#searchtasksforworkspace) - Search tasks in a workspace
* [setParentForTask](#setparentfortask) - Set the parent of a task
* [updateTask](#updatetask) - Update a task

## addDependenciesForTask

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddDependenciesForTaskRequest;
import org.openapis.openapi.models.operations.AddDependenciesForTaskRequestBody;
import org.openapis.openapi.models.operations.AddDependenciesForTaskResponse;
import org.openapis.openapi.models.shared.ModifyDependenciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddDependenciesForTaskRequest req = new AddDependenciesForTaskRequest(                new AddDependenciesForTaskRequestBody() {{
                                data = new ModifyDependenciesRequest() {{
                                    dependencies = new String[]{{
                                        add("cupiditate"),
                                    }};
                                }};;
                            }};, "consequatur") {{
                optFields = new String[]{{
                    add("debitis"),
                    add("ipsam"),
                }};
                optPretty = false;
            }};            

            AddDependenciesForTaskResponse res = sdk.tasks.addDependenciesForTask(req);

            if (res.addDependenciesForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addDependentsForTask

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddDependentsForTaskRequest;
import org.openapis.openapi.models.operations.AddDependentsForTaskRequestBody;
import org.openapis.openapi.models.operations.AddDependentsForTaskResponse;
import org.openapis.openapi.models.shared.ModifyDependentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddDependentsForTaskRequest req = new AddDependentsForTaskRequest(                new AddDependentsForTaskRequestBody() {{
                                data = new ModifyDependentsRequest() {{
                                    dependents = new String[]{{
                                        add("sequi"),
                                    }};
                                }};;
                            }};, "quo") {{
                optFields = new String[]{{
                    add("recusandae"),
                    add("aperiam"),
                }};
                optPretty = false;
            }};            

            AddDependentsForTaskResponse res = sdk.tasks.addDependentsForTask(req);

            if (res.addDependentsForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addFollowersForTask

Adds followers to a task. Returns an empty data block.
Each task can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated task record, described above.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFollowersForTaskRequest;
import org.openapis.openapi.models.operations.AddFollowersForTaskRequestBody;
import org.openapis.openapi.models.operations.AddFollowersForTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskAddFollowersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddFollowersForTaskRequest req = new AddFollowersForTaskRequest(                new AddFollowersForTaskRequestBody() {{
                                data = new TaskAddFollowersRequest(                new String[]{{
                                                    add("quod"),
                                                    add("dignissimos"),
                                                    add("inventore"),
                                                }});;
                            }};, "nihil") {{
                optFields = new String[]{{
                    add("accusamus"),
                    add("aliquam"),
                    add("odio"),
                }};
                optPretty = false;
            }};            

            AddFollowersForTaskResponse res = sdk.tasks.addFollowersForTask(req);

            if (res.addFollowersForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addProjectForTask

Adds the task to the specified project, in the optional location
specified. If no location arguments are given, the task will be added to
the end of the project.

`addProject` can also be used to reorder a task within a project or
section that already contains it.

At most one of `insert_before`, `insert_after`, or `section` should be
specified. Inserting into a section in an non-order-dependent way can be
done by specifying section, otherwise, to insert within a section in a
particular place, specify `insert_before` or `insert_after` and a task
within the section to anchor the position of this task.

Returns an empty data block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddProjectForTaskRequest;
import org.openapis.openapi.models.operations.AddProjectForTaskRequestBody;
import org.openapis.openapi.models.operations.AddProjectForTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskAddProjectRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddProjectForTaskRequest req = new AddProjectForTaskRequest(                new AddProjectForTaskRequestBody() {{
                                data = new TaskAddProjectRequest("13579") {{
                                    insertAfter = "124816";
                                    insertBefore = "432134";
                                    section = "987654";
                                }};;
                            }};, "occaecati") {{
                optFields = new String[]{{
                    add("sapiente"),
                    add("dolores"),
                }};
                optPretty = false;
            }};            

            AddProjectForTaskResponse res = sdk.tasks.addProjectForTask(req);

            if (res.addProjectForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addTagForTask

Adds a tag to a task. Returns an empty data block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagForTaskRequest;
import org.openapis.openapi.models.operations.AddTagForTaskRequestBody;
import org.openapis.openapi.models.operations.AddTagForTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskAddTagRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            AddTagForTaskRequest req = new AddTagForTaskRequest(                new AddTagForTaskRequestBody() {{
                                data = new TaskAddTagRequest("13579");;
                            }};, "deserunt") {{
                optFields = new String[]{{
                    add("accusantium"),
                    add("porro"),
                }};
                optPretty = false;
            }};            

            AddTagForTaskResponse res = sdk.tasks.addTagForTask(req);

            if (res.addTagForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubtaskForTask

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubtaskForTaskRequest;
import org.openapis.openapi.models.operations.CreateSubtaskForTaskRequestBodyInput;
import org.openapis.openapi.models.operations.CreateSubtaskForTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskRequestApprovalStatusEnum;
import org.openapis.openapi.models.shared.TaskRequestAssigneeStatusEnum;
import org.openapis.openapi.models.shared.TaskRequestExternal;
import org.openapis.openapi.models.shared.TaskRequestInput;
import org.openapis.openapi.models.shared.TaskRequestResourceSubtypeEnum;
import org.openapis.openapi.models.shared.UserCompactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateSubtaskForTaskRequest req = new CreateSubtaskForTaskRequest(                new CreateSubtaskForTaskRequestBodyInput() {{
                                data = new TaskRequestInput() {{
                                    approvalStatus = TaskRequestApprovalStatusEnum.PENDING;
                                    assignee = "12345";
                                    assigneeSection = "12345";
                                    assigneeStatus = TaskRequestAssigneeStatusEnum.UPCOMING;
                                    completed = false;
                                    completedBy = new UserCompactInput() {{
                                        name = "Greg Sanchez";
                                    }};;
                                    customFields = new java.util.HashMap<String, String>() {{
                                        put("quas", "praesentium");
                                        put("consequuntur", "deleniti");
                                    }};
                                    dueAt = LocalDate.parse("2019-09-15T02:06:58.147Z");
                                    dueOn = LocalDate.parse("2019-09-15");
                                    external = new TaskRequestExternal() {{
                                        data = "A blob of information.";
                                        gid = "1234";
                                    }};;
                                    followers = new String[]{{
                                        add("fuga"),
                                    }};
                                    htmlNotes = "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>";
                                    liked = true;
                                    name = "Bug Task";
                                    notes = "Mittens really likes the stuff from Humboldt.";
                                    parent = "12345";
                                    projects = new String[]{{
                                        add("incidunt"),
                                        add("atque"),
                                        add("explicabo"),
                                    }};
                                    resourceSubtype = TaskRequestResourceSubtypeEnum.DEFAULT_TASK;
                                    startAt = LocalDate.parse("2019-09-14T02:06:58.147Z");
                                    startOn = LocalDate.parse("2019-09-14");
                                    tags = new String[]{{
                                        add("nisi"),
                                        add("fugit"),
                                    }};
                                    workspace = "12345";
                                }};;
                            }};, "sapiente") {{
                optFields = new String[]{{
                    add("ratione"),
                }};
                optPretty = false;
            }};            

            CreateSubtaskForTaskResponse res = sdk.tasks.createSubtaskForTask(req);

            if (res.createSubtaskForTask201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTask

Creating a new task is as easy as POSTing to the `/tasks` endpoint with a
data block containing the fields you’d like to set on the task. Any
unspecified fields will take on default values.

Every task is required to be created in a specific workspace, and this
workspace cannot be changed once set. The workspace need not be set
explicitly if you specify `projects` or a `parent` task instead.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaskRequest;
import org.openapis.openapi.models.operations.CreateTaskRequestBodyInput;
import org.openapis.openapi.models.operations.CreateTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskRequestApprovalStatusEnum;
import org.openapis.openapi.models.shared.TaskRequestAssigneeStatusEnum;
import org.openapis.openapi.models.shared.TaskRequestExternal;
import org.openapis.openapi.models.shared.TaskRequestInput;
import org.openapis.openapi.models.shared.TaskRequestResourceSubtypeEnum;
import org.openapis.openapi.models.shared.UserCompactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateTaskRequest req = new CreateTaskRequest(                new CreateTaskRequestBodyInput() {{
                                data = new TaskRequestInput() {{
                                    approvalStatus = TaskRequestApprovalStatusEnum.PENDING;
                                    assignee = "12345";
                                    assigneeSection = "12345";
                                    assigneeStatus = TaskRequestAssigneeStatusEnum.UPCOMING;
                                    completed = false;
                                    completedBy = new UserCompactInput() {{
                                        name = "Greg Sanchez";
                                    }};;
                                    customFields = new java.util.HashMap<String, String>() {{
                                        put("saepe", "occaecati");
                                    }};
                                    dueAt = LocalDate.parse("2019-09-15T02:06:58.147Z");
                                    dueOn = LocalDate.parse("2019-09-15");
                                    external = new TaskRequestExternal() {{
                                        data = "A blob of information.";
                                        gid = "1234";
                                    }};;
                                    followers = new String[]{{
                                        add("et"),
                                        add("esse"),
                                        add("eveniet"),
                                    }};
                                    htmlNotes = "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>";
                                    liked = true;
                                    name = "Bug Task";
                                    notes = "Mittens really likes the stuff from Humboldt.";
                                    parent = "12345";
                                    projects = new String[]{{
                                        add("veritatis"),
                                        add("esse"),
                                        add("quod"),
                                        add("nam"),
                                    }};
                                    resourceSubtype = TaskRequestResourceSubtypeEnum.DEFAULT_TASK;
                                    startAt = LocalDate.parse("2019-09-14T02:06:58.147Z");
                                    startOn = LocalDate.parse("2019-09-14");
                                    tags = new String[]{{
                                        add("aliquid"),
                                        add("quasi"),
                                        add("saepe"),
                                        add("vel"),
                                    }};
                                    workspace = "12345";
                                }};;
                            }};) {{
                optFields = new String[]{{
                    add("molestiae"),
                    add("rerum"),
                    add("occaecati"),
                }};
                optPretty = false;
            }};            

            CreateTaskResponse res = sdk.tasks.createTask(req);

            if (res.createTask201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTask

A specific, existing task can be deleted by making a DELETE request on
the URL for that task. Deleted tasks go into the “trash” of the user
making the delete request. Tasks can be recovered from the trash within a
period of 30 days; afterward they are completely removed from the system.

Returns an empty data record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaskRequest;
import org.openapis.openapi.models.operations.DeleteTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteTaskRequest req = new DeleteTaskRequest("minima") {{
                optFields = new String[]{{
                    add("eligendi"),
                    add("sit"),
                    add("culpa"),
                }};
                optPretty = false;
            }};            

            DeleteTaskResponse res = sdk.tasks.deleteTask(req);

            if (res.deleteTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## duplicateTask

Creates and returns a job that will asynchronously handle the duplication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DuplicateTaskRequest;
import org.openapis.openapi.models.operations.DuplicateTaskRequestBody;
import org.openapis.openapi.models.operations.DuplicateTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskDuplicateRequest;
import org.openapis.openapi.models.shared.TaskDuplicateRequestIncludeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DuplicateTaskRequest req = new DuplicateTaskRequest(                new DuplicateTaskRequestBody() {{
                                data = new TaskDuplicateRequest() {{
                                    include = TaskDuplicateRequestIncludeEnum.DATES;
                                    name = "New Task Name";
                                }};;
                            }};, "adipisci") {{
                optFields = new String[]{{
                    add("consequuntur"),
                    add("consequatur"),
                    add("minus"),
                    add("quaerat"),
                }};
                optPretty = false;
            }};            

            DuplicateTaskResponse res = sdk.tasks.duplicateTask(req);

            if (res.duplicateTask201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDependenciesForTask

Returns the compact representations of all of the dependencies of a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDependenciesForTaskRequest;
import org.openapis.openapi.models.operations.GetDependenciesForTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDependenciesForTaskRequest req = new GetDependenciesForTaskRequest("sapiente") {{
                limit = 232865L;
                offset = "esse";
                optFields = new String[]{{
                    add("provident"),
                    add("a"),
                    add("nulla"),
                }};
                optPretty = false;
            }};            

            GetDependenciesForTaskResponse res = sdk.tasks.getDependenciesForTask(req);

            if (res.getDependenciesForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDependentsForTask

Returns the compact representations of all of the dependents of a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDependentsForTaskRequest;
import org.openapis.openapi.models.operations.GetDependentsForTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDependentsForTaskRequest req = new GetDependentsForTaskRequest("quas") {{
                limit = 457223L;
                offset = "quasi";
                optFields = new String[]{{
                    add("error"),
                    add("sint"),
                    add("pariatur"),
                    add("possimus"),
                }};
                optPretty = false;
            }};            

            GetDependentsForTaskResponse res = sdk.tasks.getDependentsForTask(req);

            if (res.getDependentsForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubtasksForTask

Returns a compact representation of all of the subtasks of a task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubtasksForTaskRequest;
import org.openapis.openapi.models.operations.GetSubtasksForTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSubtasksForTaskRequest req = new GetSubtasksForTaskRequest("quia") {{
                limit = 908844L;
                offset = "asperiores";
                optFields = new String[]{{
                    add("veritatis"),
                    add("consequuntur"),
                    add("quasi"),
                    add("similique"),
                }};
                optPretty = false;
            }};            

            GetSubtasksForTaskResponse res = sdk.tasks.getSubtasksForTask(req);

            if (res.getSubtasksForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTask

Returns the complete task record for a single task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskRequest;
import org.openapis.openapi.models.operations.GetTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTaskRequest req = new GetTaskRequest("culpa") {{
                optFields = new String[]{{
                    add("tenetur"),
                    add("quae"),
                }};
                optPretty = false;
            }};            

            GetTaskResponse res = sdk.tasks.getTask(req);

            if (res.getTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTasks

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.

For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/docs/search-tasks-in-a-workspace).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTasksRequest;
import org.openapis.openapi.models.operations.GetTasksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTasksRequest req = new GetTasksRequest() {{
                assignee = "earum";
                completedSince = OffsetDateTime.parse("2012-02-22T02:06:58.158Z");
                limit = 424032L;
                modifiedSince = OffsetDateTime.parse("2022-09-28T13:55:38.564Z");
                offset = "libero";
                optFields = new String[]{{
                    add("soluta"),
                    add("accusantium"),
                    add("aliquam"),
                    add("sapiente"),
                }};
                optPretty = false;
                project = "dicta";
                section = "ullam";
                workspace = "reprehenderit";
            }};            

            GetTasksResponse res = sdk.tasks.getTasks(req);

            if (res.getTasks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTasksForProject

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTasksForProjectRequest;
import org.openapis.openapi.models.operations.GetTasksForProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTasksForProjectRequest req = new GetTasksForProjectRequest("ullam") {{
                completedSince = "nisi";
                limit = 16328L;
                offset = "voluptatum";
                optFields = new String[]{{
                    add("quibusdam"),
                }};
                optPretty = false;
            }};            

            GetTasksForProjectResponse res = sdk.tasks.getTasksForProject(req);

            if (res.getTasksForProject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTasksForSection

*Board view only*: Returns the compact section records for all tasks within the given section.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTasksForSectionRequest;
import org.openapis.openapi.models.operations.GetTasksForSectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTasksForSectionRequest req = new GetTasksForSectionRequest("ex") {{
                limit = 536275L;
                offset = "itaque";
                optFields = new String[]{{
                    add("architecto"),
                    add("omnis"),
                    add("tenetur"),
                }};
                optPretty = false;
            }};            

            GetTasksForSectionResponse res = sdk.tasks.getTasksForSection(req);

            if (res.getTasksForSection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTasksForTag

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTasksForTagRequest;
import org.openapis.openapi.models.operations.GetTasksForTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTasksForTagRequest req = new GetTasksForTagRequest("quasi") {{
                limit = 869489L;
                offset = "et";
                optFields = new String[]{{
                    add("ipsa"),
                    add("minima"),
                }};
                optPretty = false;
            }};            

            GetTasksForTagResponse res = sdk.tasks.getTasksForTag(req);

            if (res.getTasksForTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTasksForUserTaskList

Returns the compact list of tasks in a user’s My Tasks list.
*Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
*Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTasksForUserTaskListRequest;
import org.openapis.openapi.models.operations.GetTasksForUserTaskListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTasksForUserTaskListRequest req = new GetTasksForUserTaskListRequest("veritatis") {{
                completedSince = "consectetur";
                limit = 237173L;
                offset = "iste";
                optFields = new String[]{{
                    add("accusantium"),
                    add("rem"),
                    add("aut"),
                    add("laudantium"),
                }};
                optPretty = false;
            }};            

            GetTasksForUserTaskListResponse res = sdk.tasks.getTasksForUserTaskList(req);

            if (res.getTasksForUserTaskList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeDependenciesForTask

Unlinks a set of dependencies from this task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveDependenciesForTaskRequest;
import org.openapis.openapi.models.operations.RemoveDependenciesForTaskRequestBody;
import org.openapis.openapi.models.operations.RemoveDependenciesForTaskResponse;
import org.openapis.openapi.models.shared.ModifyDependenciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveDependenciesForTaskRequest req = new RemoveDependenciesForTaskRequest(                new RemoveDependenciesForTaskRequestBody() {{
                                data = new ModifyDependenciesRequest() {{
                                    dependencies = new String[]{{
                                        add("mollitia"),
                                        add("ab"),
                                    }};
                                }};;
                            }};, "corrupti") {{
                optFields = new String[]{{
                    add("voluptatem"),
                    add("dolor"),
                }};
                optPretty = false;
            }};            

            RemoveDependenciesForTaskResponse res = sdk.tasks.removeDependenciesForTask(req);

            if (res.removeDependenciesForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeDependentsForTask

Unlinks a set of dependents from this task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveDependentsForTaskRequest;
import org.openapis.openapi.models.operations.RemoveDependentsForTaskRequestBody;
import org.openapis.openapi.models.operations.RemoveDependentsForTaskResponse;
import org.openapis.openapi.models.shared.ModifyDependentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveDependentsForTaskRequest req = new RemoveDependentsForTaskRequest(                new RemoveDependentsForTaskRequestBody() {{
                                data = new ModifyDependentsRequest() {{
                                    dependents = new String[]{{
                                        add("numquam"),
                                        add("impedit"),
                                        add("explicabo"),
                                    }};
                                }};;
                            }};, "voluptas") {{
                optFields = new String[]{{
                    add("dignissimos"),
                }};
                optPretty = false;
            }};            

            RemoveDependentsForTaskResponse res = sdk.tasks.removeDependentsForTask(req);

            if (res.removeDependentsForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeFollowerForTask

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveFollowerForTaskRequest;
import org.openapis.openapi.models.operations.RemoveFollowerForTaskRequestBody;
import org.openapis.openapi.models.operations.RemoveFollowerForTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskRemoveFollowersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveFollowerForTaskRequest req = new RemoveFollowerForTaskRequest(                new RemoveFollowerForTaskRequestBody() {{
                                data = new TaskRemoveFollowersRequest(                new String[]{{
                                                    add("maiores"),
                                                }});;
                            }};, "natus") {{
                optFields = new String[]{{
                    add("voluptatibus"),
                }};
                optPretty = false;
            }};            

            RemoveFollowerForTaskResponse res = sdk.tasks.removeFollowerForTask(req);

            if (res.removeFollowerForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeProjectForTask

Removes the task from the specified project. The task will still exist in
the system, but it will not be in the project anymore.

Returns an empty data block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveProjectForTaskRequest;
import org.openapis.openapi.models.operations.RemoveProjectForTaskRequestBody;
import org.openapis.openapi.models.operations.RemoveProjectForTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskRemoveProjectRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveProjectForTaskRequest req = new RemoveProjectForTaskRequest(                new RemoveProjectForTaskRequestBody() {{
                                data = new TaskRemoveProjectRequest("13579");;
                            }};, "voluptas") {{
                optFields = new String[]{{
                    add("aperiam"),
                    add("ea"),
                    add("quaerat"),
                    add("consequuntur"),
                }};
                optPretty = false;
            }};            

            RemoveProjectForTaskResponse res = sdk.tasks.removeProjectForTask(req);

            if (res.removeProjectForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTagForTask

Removes a tag from a task. Returns an empty data block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTagForTaskRequest;
import org.openapis.openapi.models.operations.RemoveTagForTaskRequestBody;
import org.openapis.openapi.models.operations.RemoveTagForTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskRemoveTagRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemoveTagForTaskRequest req = new RemoveTagForTaskRequest(                new RemoveTagForTaskRequestBody() {{
                                data = new TaskRemoveTagRequest("13579");;
                            }};, "repellendus") {{
                optFields = new String[]{{
                    add("maxime"),
                    add("dignissimos"),
                    add("officia"),
                }};
                optPretty = false;
            }};            

            RemoveTagForTaskResponse res = sdk.tasks.removeTagForTask(req);

            if (res.removeTagForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchTasksForWorkspace

To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
#### Premium access
Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:

- The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace

Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.
#### Pagination
Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.
#### Eventual consistency
Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
#### Rate limits
You may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits).
#### Custom field parameters
| Parameter name | Custom field type | Accepted type |
|---|---|---|
| custom_fields.{gid}.is_set | All | Boolean |
| custom_fields.{gid}.value | Text | String |
| custom_fields.{gid}.value | Number | Number |
| custom_fields.{gid}.value | Enum | Enum option ID |
| custom_fields.{gid}.starts_with | Text only | String |
| custom_fields.{gid}.ends_with | Text only | String |
| custom_fields.{gid}.contains | Text only | String |
| custom_fields.{gid}.less_than | Number only | Number |
| custom_fields.{gid}.greater_than | Number only | Number |


For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.

**Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field

*Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTasksForWorkspaceRequest;
import org.openapis.openapi.models.operations.SearchTasksForWorkspaceResourceSubtypeEnum;
import org.openapis.openapi.models.operations.SearchTasksForWorkspaceResponse;
import org.openapis.openapi.models.operations.SearchTasksForWorkspaceSortByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SearchTasksForWorkspaceRequest req = new SearchTasksForWorkspaceRequest("asperiores") {{
                assignedByAny = "nemo";
                assignedByNot = "quae";
                assigneeAny = "quaerat";
                assigneeNot = "porro";
                commentedOnByNot = "quod";
                completed = false;
                completedAtAfter = OffsetDateTime.parse("2022-12-06T06:52:56.510Z");
                completedAtBefore = OffsetDateTime.parse("2022-04-26T11:54:02.741Z");
                completedOn = LocalDate.parse("2022-03-29");
                completedOnAfter = LocalDate.parse("2022-05-14");
                completedOnBefore = LocalDate.parse("2021-02-23");
                createdAtAfter = OffsetDateTime.parse("2021-04-17T14:58:08.915Z");
                createdAtBefore = OffsetDateTime.parse("2022-07-03T08:20:26.765Z");
                createdByAny = "quos";
                createdByNot = "vel";
                createdOn = LocalDate.parse("2022-03-06");
                createdOnAfter = LocalDate.parse("2021-07-11");
                createdOnBefore = LocalDate.parse("2022-07-21");
                dueAtAfter = OffsetDateTime.parse("2022-01-12T08:24:33.830Z");
                dueAtBefore = OffsetDateTime.parse("2021-11-29T08:07:19.623Z");
                dueOn = LocalDate.parse("2021-10-22");
                dueOnAfter = LocalDate.parse("2022-04-06");
                dueOnBefore = LocalDate.parse("2022-07-21");
                followersNot = "exercitationem";
                hasAttachment = false;
                isBlocked = false;
                isBlocking = false;
                isSubtask = false;
                likedByNot = "earum";
                modifiedAtAfter = OffsetDateTime.parse("2022-03-25T07:54:13.852Z");
                modifiedAtBefore = OffsetDateTime.parse("2021-11-08T23:21:08.200Z");
                modifiedOn = LocalDate.parse("2020-11-28");
                modifiedOnAfter = LocalDate.parse("2020-04-23");
                modifiedOnBefore = LocalDate.parse("2022-11-17");
                optFields = new String[]{{
                    add("adipisci"),
                    add("non"),
                    add("amet"),
                    add("beatae"),
                }};
                optPretty = false;
                portfoliosAny = "dignissimos";
                projectsAll = "a";
                projectsAny = "debitis";
                projectsNot = "consectetur";
                resourceSubtype = SearchTasksForWorkspaceResourceSubtypeEnum.DEFAULT_TASK;
                sectionsAll = "harum";
                sectionsAny = "laboriosam";
                sectionsNot = "ipsa";
                sortAscending = false;
                sortBy = SearchTasksForWorkspaceSortByEnum.MODIFIED_AT;
                startOn = LocalDate.parse("2022-10-09");
                startOnAfter = LocalDate.parse("2021-02-08");
                startOnBefore = LocalDate.parse("2022-11-13");
                tagsAll = "voluptas";
                tagsAny = "voluptas";
                tagsNot = "voluptas";
                teamsAny = "minima";
                text = "nobis";
            }};            

            SearchTasksForWorkspaceResponse res = sdk.tasks.searchTasksForWorkspace(req);

            if (res.searchTasksForWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setParentForTask

parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetParentForTaskRequest;
import org.openapis.openapi.models.operations.SetParentForTaskRequestBody;
import org.openapis.openapi.models.operations.SetParentForTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskSetParentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SetParentForTaskRequest req = new SetParentForTaskRequest(                new SetParentForTaskRequestBody() {{
                                data = new TaskSetParentRequest("987654") {{
                                    insertAfter = "null";
                                    insertBefore = "124816";
                                }};;
                            }};, "dolorum") {{
                optFields = new String[]{{
                    add("minus"),
                }};
                optPretty = false;
            }};            

            SetParentForTaskResponse res = sdk.tasks.setParentForTask(req);

            if (res.setParentForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTask

A specific, existing task can be updated by making a PUT request on the
URL for that task. Only the fields provided in the `data` block will be
updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated task record.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskRequest;
import org.openapis.openapi.models.operations.UpdateTaskRequestBodyInput;
import org.openapis.openapi.models.operations.UpdateTaskResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TaskRequestApprovalStatusEnum;
import org.openapis.openapi.models.shared.TaskRequestAssigneeStatusEnum;
import org.openapis.openapi.models.shared.TaskRequestExternal;
import org.openapis.openapi.models.shared.TaskRequestInput;
import org.openapis.openapi.models.shared.TaskRequestResourceSubtypeEnum;
import org.openapis.openapi.models.shared.UserCompactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateTaskRequest req = new UpdateTaskRequest(                new UpdateTaskRequestBodyInput() {{
                                data = new TaskRequestInput() {{
                                    approvalStatus = TaskRequestApprovalStatusEnum.PENDING;
                                    assignee = "12345";
                                    assigneeSection = "12345";
                                    assigneeStatus = TaskRequestAssigneeStatusEnum.UPCOMING;
                                    completed = false;
                                    completedBy = new UserCompactInput() {{
                                        name = "Greg Sanchez";
                                    }};;
                                    customFields = new java.util.HashMap<String, String>() {{
                                        put("blanditiis", "in");
                                    }};
                                    dueAt = LocalDate.parse("2019-09-15T02:06:58.147Z");
                                    dueOn = LocalDate.parse("2019-09-15");
                                    external = new TaskRequestExternal() {{
                                        data = "A blob of information.";
                                        gid = "1234";
                                    }};;
                                    followers = new String[]{{
                                        add("aliquam"),
                                        add("officiis"),
                                    }};
                                    htmlNotes = "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>";
                                    liked = true;
                                    name = "Bug Task";
                                    notes = "Mittens really likes the stuff from Humboldt.";
                                    parent = "12345";
                                    projects = new String[]{{
                                        add("ullam"),
                                        add("adipisci"),
                                        add("cum"),
                                        add("blanditiis"),
                                    }};
                                    resourceSubtype = TaskRequestResourceSubtypeEnum.DEFAULT_TASK;
                                    startAt = LocalDate.parse("2019-09-14T02:06:58.147Z");
                                    startOn = LocalDate.parse("2019-09-14");
                                    tags = new String[]{{
                                        add("hic"),
                                        add("nesciunt"),
                                        add("culpa"),
                                    }};
                                    workspace = "12345";
                                }};;
                            }};, "corrupti") {{
                optFields = new String[]{{
                    add("totam"),
                    add("hic"),
                    add("exercitationem"),
                    add("nobis"),
                }};
                optPretty = false;
            }};            

            UpdateTaskResponse res = sdk.tasks.updateTask(req);

            if (res.updateTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
