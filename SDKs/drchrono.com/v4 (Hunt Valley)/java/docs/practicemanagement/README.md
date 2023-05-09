# practiceManagement

## Overview

Create and manage practice management resources

### Available Operations

* [inventoryCategoriesList](#inventorycategorieslist) - Retrieve or search inventory categories
* [inventoryCategoriesRead](#inventorycategoriesread) - Retrieve an existing inventory category
* [inventoryVaccinesCreate](#inventoryvaccinescreate) - Create vaccine inventory
* [inventoryVaccinesList](#inventoryvaccineslist) - Retrieve or search vaccine inventories
* [inventoryVaccinesRead](#inventoryvaccinesread) - Retrieve an existing vaccine inventory
* [messagesCreate](#messagescreate) - Create messages in doctor's message center
* [messagesDelete](#messagesdelete) - Delete an existing message in doctor's message center
* [messagesList](#messageslist) - Retrieve or search messages in doctor's message center
* [messagesPartialUpdate](#messagespartialupdate) - Update an existing message in doctor's message center
* [messagesRead](#messagesread) - Retrieve an existing message in doctor's message center
* [messagesUpdate](#messagesupdate) - Update an existing message in doctor's message center
* [officesAddExamRoom](#officesaddexamroom) - Add an exam room to the office
* [officesList](#officeslist) - Retrieve or search offices
* [officesPartialUpdate](#officespartialupdate) - Update an existing office
* [officesRead](#officesread) - Retrieve an existing office
* [officesUpdate](#officesupdate) - Update an existing office
* [taskCategoriesCreate](#taskcategoriescreate) - Create a task category
* [taskCategoriesList](#taskcategorieslist) - Retrieve or search task categories
* [taskCategoriesPartialUpdate](#taskcategoriespartialupdate) - Update an existing task category
* [taskCategoriesRead](#taskcategoriesread) - Retrieve an existing task category
* [taskCategoriesUpdate](#taskcategoriesupdate) - Update an existing task category
* [taskNotesCreate](#tasknotescreate) - Create a task note
* [taskNotesList](#tasknoteslist) - Retrieve or search task notes
* [taskNotesPartialUpdate](#tasknotespartialupdate) - Update an existing task note
* [taskNotesRead](#tasknotesread) - Retrieve an existing task note
* [taskNotesUpdate](#tasknotesupdate) - Update an existing task note
* [taskStatusesCreate](#taskstatusescreate) - Create a task status
* [taskStatusesList](#taskstatuseslist) - Retrieve or search task statuses
* [taskStatusesPartialUpdate](#taskstatusespartialupdate) - Update an existing task status
* [taskStatusesRead](#taskstatusesread) - Retrieve an existing task status
* [taskStatusesUpdate](#taskstatusesupdate) - Update an existing task status
* [taskTemplatesCreate](#tasktemplatescreate) - Create a task template
* [taskTemplatesList](#tasktemplateslist) - Retrieve or search task templates
* [taskTemplatesPartialUpdate](#tasktemplatespartialupdate) - Update an existing task template
* [taskTemplatesRead](#tasktemplatesread) - Retrieve an existing task template
* [taskTemplatesUpdate](#tasktemplatesupdate) - Update an existing task template
* [tasksCreate](#taskscreate) - Create a task
* [tasksList](#taskslist) - Retrieve or search tasks
* [tasksPartialUpdate](#taskspartialupdate) - Update an existing task
* [tasksRead](#tasksread) - Retrieve an existing task
* [tasksUpdate](#tasksupdate) - Update an existing task

## inventoryCategoriesList

Retrieve or search inventory categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryCategoriesListRequest;
import org.openapis.openapi.models.operations.InventoryCategoriesListResponse;
import org.openapis.openapi.models.operations.InventoryCategoriesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InventoryCategoriesListRequest req = new InventoryCategoriesListRequest() {{
                cursor = "debitis";
                doctor = 514513L;
                pageSize = 432606L;
                since = "nemo";
            }};            

            InventoryCategoriesListResponse res = sdk.practiceManagement.inventoryCategoriesList(req, new InventoryCategoriesListSecurity("recusandae") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryCategoriesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inventoryCategoriesRead

Retrieve an existing inventory category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryCategoriesReadRequest;
import org.openapis.openapi.models.operations.InventoryCategoriesReadResponse;
import org.openapis.openapi.models.operations.InventoryCategoriesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InventoryCategoriesReadRequest req = new InventoryCategoriesReadRequest("esse") {{
                doctor = 592081L;
                since = "quis";
            }};            

            InventoryCategoriesReadResponse res = sdk.practiceManagement.inventoryCategoriesRead(req, new InventoryCategoriesReadSecurity("eum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inventoryVaccinesCreate

Create vaccine inventory

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryVaccinesCreateRequest;
import org.openapis.openapi.models.operations.InventoryVaccinesCreateResponse;
import org.openapis.openapi.models.operations.InventoryVaccinesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InventoryVaccinesCreateRequest req = new InventoryVaccinesCreateRequest() {{
                cvxCode = "reiciendis";
                doctor = 592780L;
                since = "aspernatur";
                status = "ullam";
            }};            

            InventoryVaccinesCreateResponse res = sdk.practiceManagement.inventoryVaccinesCreate(req, new InventoryVaccinesCreateSecurity("quasi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryVaccine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inventoryVaccinesList

Retrieve or search vaccine inventories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryVaccinesListRequest;
import org.openapis.openapi.models.operations.InventoryVaccinesListResponse;
import org.openapis.openapi.models.operations.InventoryVaccinesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InventoryVaccinesListRequest req = new InventoryVaccinesListRequest() {{
                cursor = "animi";
                cvxCode = "nostrum";
                doctor = 652309L;
                pageSize = 591027L;
                since = "possimus";
                status = "animi";
            }};            

            InventoryVaccinesListResponse res = sdk.practiceManagement.inventoryVaccinesList(req, new InventoryVaccinesListSecurity("ex") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryVaccinesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## inventoryVaccinesRead

Retrieve an existing vaccine inventory

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InventoryVaccinesReadRequest;
import org.openapis.openapi.models.operations.InventoryVaccinesReadResponse;
import org.openapis.openapi.models.operations.InventoryVaccinesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InventoryVaccinesReadRequest req = new InventoryVaccinesReadRequest("aliquid") {{
                cvxCode = "accusantium";
                doctor = 999278L;
                since = "doloribus";
                status = "ullam";
            }};            

            InventoryVaccinesReadResponse res = sdk.practiceManagement.inventoryVaccinesRead(req, new InventoryVaccinesReadSecurity("in") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryVaccine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesCreate

Create messages in doctor's message center

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesCreateRequest;
import org.openapis.openapi.models.operations.MessagesCreateResponse;
import org.openapis.openapi.models.operations.MessagesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesCreateRequest req = new MessagesCreateRequest() {{
                doctor = 721407L;
                owner = 937636L;
                patient = 637583L;
                receivedSince = "laborum";
                responsibleUser = 813054L;
                type = "modi";
                updatedSince = "voluptatibus";
            }};            

            MessagesCreateResponse res = sdk.practiceManagement.messagesCreate(req, new MessagesCreateSecurity("molestias") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.doctorMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesDelete

Delete an existing message in doctor's message center

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesDeleteRequest;
import org.openapis.openapi.models.operations.MessagesDeleteResponse;
import org.openapis.openapi.models.operations.MessagesDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesDeleteRequest req = new MessagesDeleteRequest("officiis") {{
                doctor = 956933L;
                owner = 764562L;
                patient = 113486L;
                receivedSince = "rerum";
                responsibleUser = 272229L;
                type = "quis";
                updatedSince = "inventore";
            }};            

            MessagesDeleteResponse res = sdk.practiceManagement.messagesDelete(req, new MessagesDeleteSecurity("fugit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesList

Retrieve or search messages in doctor's message center

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesListRequest;
import org.openapis.openapi.models.operations.MessagesListResponse;
import org.openapis.openapi.models.operations.MessagesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesListRequest req = new MessagesListRequest() {{
                cursor = "cumque";
                doctor = 62636L;
                owner = 21688L;
                pageSize = 241901L;
                patient = 137251L;
                receivedSince = "eum";
                responsibleUser = 260628L;
                type = "rem";
                updatedSince = "at";
            }};            

            MessagesListResponse res = sdk.practiceManagement.messagesList(req, new MessagesListSecurity("impedit") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.messagesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesPartialUpdate

Update an existing message in doctor's message center

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesPartialUpdateRequest;
import org.openapis.openapi.models.operations.MessagesPartialUpdateResponse;
import org.openapis.openapi.models.operations.MessagesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesPartialUpdateRequest req = new MessagesPartialUpdateRequest("eos") {{
                doctor = 958741L;
                owner = 433279L;
                patient = 117320L;
                receivedSince = "minima";
                responsibleUser = 107004L;
                type = "cupiditate";
                updatedSince = "provident";
            }};            

            MessagesPartialUpdateResponse res = sdk.practiceManagement.messagesPartialUpdate(req, new MessagesPartialUpdateSecurity("earum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesRead

Retrieve an existing message in doctor's message center

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesReadRequest;
import org.openapis.openapi.models.operations.MessagesReadResponse;
import org.openapis.openapi.models.operations.MessagesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesReadRequest req = new MessagesReadRequest("soluta") {{
                doctor = 940782L;
                owner = 848151L;
                patient = 52508L;
                receivedSince = "earum";
                responsibleUser = 596211L;
                type = "maiores";
                updatedSince = "debitis";
            }};            

            MessagesReadResponse res = sdk.practiceManagement.messagesRead(req, new MessagesReadSecurity("aliquid") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.doctorMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesUpdate

Update an existing message in doctor's message center

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesUpdateRequest;
import org.openapis.openapi.models.operations.MessagesUpdateResponse;
import org.openapis.openapi.models.operations.MessagesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesUpdateRequest req = new MessagesUpdateRequest("porro") {{
                doctor = 380335L;
                owner = 211534L;
                patient = 147808L;
                receivedSince = "cumque";
                responsibleUser = 684935L;
                type = "ratione";
                updatedSince = "animi";
            }};            

            MessagesUpdateResponse res = sdk.practiceManagement.messagesUpdate(req, new MessagesUpdateSecurity("necessitatibus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## officesAddExamRoom

Add an exam room to the office

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OfficesAddExamRoomRequest;
import org.openapis.openapi.models.operations.OfficesAddExamRoomResponse;
import org.openapis.openapi.models.operations.OfficesAddExamRoomSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OfficesAddExamRoomRequest req = new OfficesAddExamRoomRequest("nulla") {{
                doctor = 8931L;
            }};            

            OfficesAddExamRoomResponse res = sdk.practiceManagement.officesAddExamRoom(req, new OfficesAddExamRoomSecurity("quasi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.office != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## officesList

Retrieve or search offices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OfficesListRequest;
import org.openapis.openapi.models.operations.OfficesListResponse;
import org.openapis.openapi.models.operations.OfficesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OfficesListRequest req = new OfficesListRequest() {{
                cursor = "et";
                doctor = 497777L;
                pageSize = 619183L;
            }};            

            OfficesListResponse res = sdk.practiceManagement.officesList(req, new OfficesListSecurity("occaecati") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.officesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## officesPartialUpdate

Update an existing office

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OfficesPartialUpdateRequest;
import org.openapis.openapi.models.operations.OfficesPartialUpdateResponse;
import org.openapis.openapi.models.operations.OfficesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OfficesPartialUpdateRequest req = new OfficesPartialUpdateRequest("suscipit") {{
                doctor = 241557L;
            }};            

            OfficesPartialUpdateResponse res = sdk.practiceManagement.officesPartialUpdate(req, new OfficesPartialUpdateSecurity("quasi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## officesRead

Retrieve an existing office

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OfficesReadRequest;
import org.openapis.openapi.models.operations.OfficesReadResponse;
import org.openapis.openapi.models.operations.OfficesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OfficesReadRequest req = new OfficesReadRequest("magni") {{
                doctor = 984934L;
            }};            

            OfficesReadResponse res = sdk.practiceManagement.officesRead(req, new OfficesReadSecurity("nulla") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.office != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## officesUpdate

Update an existing office

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OfficesUpdateRequest;
import org.openapis.openapi.models.operations.OfficesUpdateResponse;
import org.openapis.openapi.models.operations.OfficesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OfficesUpdateRequest req = new OfficesUpdateRequest("necessitatibus") {{
                doctor = 58534L;
            }};            

            OfficesUpdateResponse res = sdk.practiceManagement.officesUpdate(req, new OfficesUpdateSecurity("tempora") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskCategoriesCreate

Create a task category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskCategoriesCreateRequest;
import org.openapis.openapi.models.operations.TaskCategoriesCreateResponse;
import org.openapis.openapi.models.operations.TaskCategoriesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskCategoriesCreateRequest req = new TaskCategoriesCreateRequest() {{
                since = "nihil";
            }};            

            TaskCategoriesCreateResponse res = sdk.practiceManagement.taskCategoriesCreate(req, new TaskCategoriesCreateSecurity("molestiae") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskCategoriesList

Retrieve or search task categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskCategoriesListRequest;
import org.openapis.openapi.models.operations.TaskCategoriesListResponse;
import org.openapis.openapi.models.operations.TaskCategoriesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskCategoriesListRequest req = new TaskCategoriesListRequest() {{
                cursor = "dicta";
                pageSize = 479754L;
                since = "esse";
            }};            

            TaskCategoriesListResponse res = sdk.practiceManagement.taskCategoriesList(req, new TaskCategoriesListSecurity("praesentium") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskCategoriesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskCategoriesPartialUpdate

Update an existing task category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskCategoriesPartialUpdateRequest;
import org.openapis.openapi.models.operations.TaskCategoriesPartialUpdateResponse;
import org.openapis.openapi.models.operations.TaskCategoriesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskCategoriesPartialUpdateRequest req = new TaskCategoriesPartialUpdateRequest("maiores") {{
                since = "reiciendis";
            }};            

            TaskCategoriesPartialUpdateResponse res = sdk.practiceManagement.taskCategoriesPartialUpdate(req, new TaskCategoriesPartialUpdateSecurity("vel") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskCategoriesRead

Retrieve an existing task category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskCategoriesReadRequest;
import org.openapis.openapi.models.operations.TaskCategoriesReadResponse;
import org.openapis.openapi.models.operations.TaskCategoriesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskCategoriesReadRequest req = new TaskCategoriesReadRequest("architecto") {{
                since = "fugiat";
            }};            

            TaskCategoriesReadResponse res = sdk.practiceManagement.taskCategoriesRead(req, new TaskCategoriesReadSecurity("doloremque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskCategoriesUpdate

Update an existing task category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskCategoriesUpdateRequest;
import org.openapis.openapi.models.operations.TaskCategoriesUpdateResponse;
import org.openapis.openapi.models.operations.TaskCategoriesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskCategoriesUpdateRequest req = new TaskCategoriesUpdateRequest("dicta") {{
                since = "odio";
            }};            

            TaskCategoriesUpdateResponse res = sdk.practiceManagement.taskCategoriesUpdate(req, new TaskCategoriesUpdateSecurity("tempora") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskNotesCreate

Create a task note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskNotesCreateRequest;
import org.openapis.openapi.models.operations.TaskNotesCreateResponse;
import org.openapis.openapi.models.operations.TaskNotesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskNotesCreateRequest req = new TaskNotesCreateRequest() {{
                since = "esse";
                task = 403793L;
            }};            

            TaskNotesCreateResponse res = sdk.practiceManagement.taskNotesCreate(req, new TaskNotesCreateSecurity("consectetur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskNote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskNotesList

Retrieve or search task notes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskNotesListRequest;
import org.openapis.openapi.models.operations.TaskNotesListResponse;
import org.openapis.openapi.models.operations.TaskNotesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskNotesListRequest req = new TaskNotesListRequest() {{
                cursor = "aliquid";
                pageSize = 58870L;
                since = "laborum";
                task = 123844L;
            }};            

            TaskNotesListResponse res = sdk.practiceManagement.taskNotesList(req, new TaskNotesListSecurity("nostrum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskNotesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskNotesPartialUpdate

Update an existing task note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskNotesPartialUpdateRequest;
import org.openapis.openapi.models.operations.TaskNotesPartialUpdateResponse;
import org.openapis.openapi.models.operations.TaskNotesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskNotesPartialUpdateRequest req = new TaskNotesPartialUpdateRequest("fugiat") {{
                since = "expedita";
                task = 399667L;
            }};            

            TaskNotesPartialUpdateResponse res = sdk.practiceManagement.taskNotesPartialUpdate(req, new TaskNotesPartialUpdateSecurity("officia") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskNotesRead

Retrieve an existing task note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskNotesReadRequest;
import org.openapis.openapi.models.operations.TaskNotesReadResponse;
import org.openapis.openapi.models.operations.TaskNotesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskNotesReadRequest req = new TaskNotesReadRequest("suscipit") {{
                since = "aliquid";
                task = 21973L;
            }};            

            TaskNotesReadResponse res = sdk.practiceManagement.taskNotesRead(req, new TaskNotesReadSecurity("eum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskNote != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskNotesUpdate

Update an existing task note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskNotesUpdateRequest;
import org.openapis.openapi.models.operations.TaskNotesUpdateResponse;
import org.openapis.openapi.models.operations.TaskNotesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskNotesUpdateRequest req = new TaskNotesUpdateRequest("voluptas") {{
                since = "iste";
                task = 661607L;
            }};            

            TaskNotesUpdateResponse res = sdk.practiceManagement.taskNotesUpdate(req, new TaskNotesUpdateSecurity("ab") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskStatusesCreate

Create a task status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskStatusesCreateRequest;
import org.openapis.openapi.models.operations.TaskStatusesCreateResponse;
import org.openapis.openapi.models.operations.TaskStatusesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskStatusesCreateRequest req = new TaskStatusesCreateRequest() {{
                since = "error";
            }};            

            TaskStatusesCreateResponse res = sdk.practiceManagement.taskStatusesCreate(req, new TaskStatusesCreateSecurity("possimus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskStatusesList

Retrieve or search task statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskStatusesListRequest;
import org.openapis.openapi.models.operations.TaskStatusesListResponse;
import org.openapis.openapi.models.operations.TaskStatusesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskStatusesListRequest req = new TaskStatusesListRequest() {{
                cursor = "voluptates";
                pageSize = 653421L;
                since = "laborum";
            }};            

            TaskStatusesListResponse res = sdk.practiceManagement.taskStatusesList(req, new TaskStatusesListSecurity("libero") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskStatusesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskStatusesPartialUpdate

Update an existing task status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskStatusesPartialUpdateRequest;
import org.openapis.openapi.models.operations.TaskStatusesPartialUpdateResponse;
import org.openapis.openapi.models.operations.TaskStatusesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskStatusesPartialUpdateRequest req = new TaskStatusesPartialUpdateRequest("ad") {{
                since = "deleniti";
            }};            

            TaskStatusesPartialUpdateResponse res = sdk.practiceManagement.taskStatusesPartialUpdate(req, new TaskStatusesPartialUpdateSecurity("enim") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskStatusesRead

Retrieve an existing task status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskStatusesReadRequest;
import org.openapis.openapi.models.operations.TaskStatusesReadResponse;
import org.openapis.openapi.models.operations.TaskStatusesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskStatusesReadRequest req = new TaskStatusesReadRequest("vitae") {{
                since = "repellendus";
            }};            

            TaskStatusesReadResponse res = sdk.practiceManagement.taskStatusesRead(req, new TaskStatusesReadSecurity("ex") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskStatusesUpdate

Update an existing task status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskStatusesUpdateRequest;
import org.openapis.openapi.models.operations.TaskStatusesUpdateResponse;
import org.openapis.openapi.models.operations.TaskStatusesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskStatusesUpdateRequest req = new TaskStatusesUpdateRequest("quo") {{
                since = "ex";
            }};            

            TaskStatusesUpdateResponse res = sdk.practiceManagement.taskStatusesUpdate(req, new TaskStatusesUpdateSecurity("ut") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskTemplatesCreate

Create a task template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskTemplatesCreateRequest;
import org.openapis.openapi.models.operations.TaskTemplatesCreateResponse;
import org.openapis.openapi.models.operations.TaskTemplatesCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskTemplatesCreateRequest req = new TaskTemplatesCreateRequest() {{
                assigneeGroup = 321043L;
                assigneeUser = 713927L;
                category = 29950L;
                since = "molestias";
                status = 737254L;
            }};            

            TaskTemplatesCreateResponse res = sdk.practiceManagement.taskTemplatesCreate(req, new TaskTemplatesCreateSecurity("aliquid") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskTemplatesList

Retrieve or search task templates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskTemplatesListRequest;
import org.openapis.openapi.models.operations.TaskTemplatesListResponse;
import org.openapis.openapi.models.operations.TaskTemplatesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskTemplatesListRequest req = new TaskTemplatesListRequest() {{
                assigneeGroup = 109784L;
                assigneeUser = 530860L;
                category = 606308L;
                cursor = "veritatis";
                pageSize = 703218L;
                since = "est";
                status = 634786L;
            }};            

            TaskTemplatesListResponse res = sdk.practiceManagement.taskTemplatesList(req, new TaskTemplatesListSecurity("voluptatem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskTemplatesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskTemplatesPartialUpdate

Update an existing task template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskTemplatesPartialUpdateRequest;
import org.openapis.openapi.models.operations.TaskTemplatesPartialUpdateResponse;
import org.openapis.openapi.models.operations.TaskTemplatesPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskTemplatesPartialUpdateRequest req = new TaskTemplatesPartialUpdateRequest("sapiente") {{
                assigneeGroup = 889288L;
                assigneeUser = 103298L;
                category = 682119L;
                since = "pariatur";
                status = 891315L;
            }};            

            TaskTemplatesPartialUpdateResponse res = sdk.practiceManagement.taskTemplatesPartialUpdate(req, new TaskTemplatesPartialUpdateSecurity("voluptatem") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskTemplatesRead

Retrieve an existing task template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskTemplatesReadRequest;
import org.openapis.openapi.models.operations.TaskTemplatesReadResponse;
import org.openapis.openapi.models.operations.TaskTemplatesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskTemplatesReadRequest req = new TaskTemplatesReadRequest("alias") {{
                assigneeGroup = 534917L;
                assigneeUser = 937219L;
                category = 404244L;
                since = "sapiente";
                status = 524184L;
            }};            

            TaskTemplatesReadResponse res = sdk.practiceManagement.taskTemplatesRead(req, new TaskTemplatesReadSecurity("minus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taskTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taskTemplatesUpdate

Update an existing task template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaskTemplatesUpdateRequest;
import org.openapis.openapi.models.operations.TaskTemplatesUpdateResponse;
import org.openapis.openapi.models.operations.TaskTemplatesUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TaskTemplatesUpdateRequest req = new TaskTemplatesUpdateRequest("nemo") {{
                assigneeGroup = 992074L;
                assigneeUser = 190567L;
                category = 355225L;
                since = "perferendis";
                status = 848341L;
            }};            

            TaskTemplatesUpdateResponse res = sdk.practiceManagement.taskTemplatesUpdate(req, new TaskTemplatesUpdateSecurity("totam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksCreate

Create a task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksCreateRequest;
import org.openapis.openapi.models.operations.TasksCreateResponse;
import org.openapis.openapi.models.operations.TasksCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksCreateRequest req = new TasksCreateRequest() {{
                assigneeGroup = 770675L;
                assigneeUser = 842777L;
                category = 720528L;
                dueAtDate = "ipsam";
                dueAtRange = "culpa";
                dueAtSince = "dolor";
                dueAtUnknown = "aliquam";
                since = "inventore";
                status = 537279L;
            }};            

            TasksCreateResponse res = sdk.practiceManagement.tasksCreate(req, new TasksCreateSecurity("veritatis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksList

Retrieve or search tasks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksListRequest;
import org.openapis.openapi.models.operations.TasksListResponse;
import org.openapis.openapi.models.operations.TasksListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksListRequest req = new TasksListRequest() {{
                assigneeGroup = 274575L;
                assigneeUser = 221396L;
                category = 8689L;
                cursor = "architecto";
                dueAtDate = "sit";
                dueAtRange = "modi";
                dueAtSince = "fugit";
                dueAtUnknown = "ab";
                pageSize = 513760L;
                since = "quae";
                status = 222658L;
            }};            

            TasksListResponse res = sdk.practiceManagement.tasksList(req, new TasksListSecurity("fugiat") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tasksList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksPartialUpdate

Update an existing task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksPartialUpdateRequest;
import org.openapis.openapi.models.operations.TasksPartialUpdateResponse;
import org.openapis.openapi.models.operations.TasksPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksPartialUpdateRequest req = new TasksPartialUpdateRequest("ipsam") {{
                assigneeGroup = 162120L;
                assigneeUser = 55107L;
                category = 559682L;
                dueAtDate = "eveniet";
                dueAtRange = "impedit";
                dueAtSince = "officiis";
                dueAtUnknown = "esse";
                since = "necessitatibus";
                status = 153369L;
            }};            

            TasksPartialUpdateResponse res = sdk.practiceManagement.tasksPartialUpdate(req, new TasksPartialUpdateSecurity("veniam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksRead

Retrieve an existing task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksReadRequest;
import org.openapis.openapi.models.operations.TasksReadResponse;
import org.openapis.openapi.models.operations.TasksReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksReadRequest req = new TasksReadRequest("nesciunt") {{
                assigneeGroup = 712927L;
                assigneeUser = 432984L;
                category = 426943L;
                dueAtDate = "voluptatum";
                dueAtRange = "magnam";
                dueAtSince = "exercitationem";
                dueAtUnknown = "ab";
                since = "porro";
                status = 421844L;
            }};            

            TasksReadResponse res = sdk.practiceManagement.tasksRead(req, new TasksReadSecurity("nobis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tasksUpdate

Update an existing task

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TasksUpdateRequest;
import org.openapis.openapi.models.operations.TasksUpdateResponse;
import org.openapis.openapi.models.operations.TasksUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TasksUpdateRequest req = new TasksUpdateRequest("laboriosam") {{
                assigneeGroup = 927212L;
                assigneeUser = 160393L;
                category = 28952L;
                dueAtDate = "exercitationem";
                dueAtRange = "necessitatibus";
                dueAtSince = "quasi";
                dueAtUnknown = "nisi";
                since = "at";
                status = 878373L;
            }};            

            TasksUpdateResponse res = sdk.practiceManagement.tasksUpdate(req, new TasksUpdateSecurity("est") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
