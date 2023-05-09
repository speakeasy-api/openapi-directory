# notes

### Available Operations

* [notesAdd](#notesadd) - Create note
* [notesAll](#notesall) - List notes
* [notesDelete](#notesdelete) - Delete note
* [notesOne](#notesone) - Get note
* [notesUpdate](#notesupdate) - Update note

## notesAdd

Create note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotesAddRequest;
import org.openapis.openapi.models.operations.NotesAddResponse;
import org.openapis.openapi.models.operations.NotesAddSecurity;
import org.openapis.openapi.models.shared.NoteInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotesAddRequest req = new NotesAddRequest(                new NoteInput() {{
                                active = true;
                                companyId = "12345";
                                contactId = "12345";
                                content = "Office hours are 9AM-6PM";
                                leadId = "12345";
                                opportunityId = "12345";
                                ownerId = "12345";
                                title = "Meeting Notes";
                            }};, "id", "blanditiis") {{
                raw = false;
                xApideckServiceId = "deleniti";
            }};            

            NotesAddResponse res = sdk.notes.notesAdd(req, new NotesAddSecurity("sapiente") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createNoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notesAll

List notes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotesAllRequest;
import org.openapis.openapi.models.operations.NotesAllResponse;
import org.openapis.openapi.models.operations.NotesAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotesAllRequest req = new NotesAllRequest("amet", "deserunt") {{
                cursor = "nisi";
                fields = "vel";
                limit = 618809L;
                raw = false;
                xApideckServiceId = "omnis";
            }};            

            NotesAllResponse res = sdk.notes.notesAll(req, new NotesAllSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getNotesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notesDelete

Delete note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotesDeleteRequest;
import org.openapis.openapi.models.operations.NotesDeleteResponse;
import org.openapis.openapi.models.operations.NotesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotesDeleteRequest req = new NotesDeleteRequest("perferendis", "nihil", "magnam") {{
                raw = false;
                xApideckServiceId = "distinctio";
            }};            

            NotesDeleteResponse res = sdk.notes.notesDelete(req, new NotesDeleteSecurity("id") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteNoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notesOne

Get note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotesOneRequest;
import org.openapis.openapi.models.operations.NotesOneResponse;
import org.openapis.openapi.models.operations.NotesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotesOneRequest req = new NotesOneRequest("labore", "labore", "suscipit") {{
                fields = "natus";
                raw = false;
                xApideckServiceId = "nobis";
            }};            

            NotesOneResponse res = sdk.notes.notesOne(req, new NotesOneSecurity("eum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getNoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notesUpdate

Update note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotesUpdateRequest;
import org.openapis.openapi.models.operations.NotesUpdateResponse;
import org.openapis.openapi.models.operations.NotesUpdateSecurity;
import org.openapis.openapi.models.shared.NoteInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NotesUpdateRequest req = new NotesUpdateRequest(                new NoteInput() {{
                                active = true;
                                companyId = "12345";
                                contactId = "12345";
                                content = "Office hours are 9AM-6PM";
                                leadId = "12345";
                                opportunityId = "12345";
                                ownerId = "12345";
                                title = "Meeting Notes";
                            }};, "vero", "aspernatur", "architecto") {{
                raw = false;
                xApideckServiceId = "magnam";
            }};            

            NotesUpdateResponse res = sdk.notes.notesUpdate(req, new NotesUpdateSecurity("et") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateNoteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
