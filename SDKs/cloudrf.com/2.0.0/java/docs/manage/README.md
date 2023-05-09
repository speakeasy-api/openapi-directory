# manage

### Available Operations

* [addClutter](#addclutter) - Upload clutter data as GeoJSON
* [delete](#delete) - Delete a calculation from the database.
* [deleteNetwork](#deletenetwork) - Delete an entire network
* [export](#export) - Export a calculation in a GIS file format
* [list](#list) - List calculations from your archive

## addClutter

Upload GeoJSON lineString and polygon features to your account. The height property is in metres and the material code / type / attenuation are.. 1	Trees –	0.25,2Trees +	0.5,3	Timber –	1.0,4	Timber +	1.5,5	Brick – 	1.5,6	Brick +	2.0,7	Concrete –	3.0,8	Concrete +	4.0,9	Metal	6.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddClutterRequestBody;
import org.openapis.openapi.models.operations.AddClutterResponse;
import org.openapis.openapi.models.operations.AddClutterSecurity;
import org.openapis.openapi.models.shared.Feature;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddClutterRequestBody req = new AddClutterRequestBody() {{
                features = new org.openapis.openapi.models.shared.Feature[]{{
                    add(new Feature() {{
                        geometry = "quasi";
                        properties = "reiciendis";
                        type = "voluptatibus";
                    }}),
                    add(new Feature() {{
                        geometry = "vero";
                        properties = "nihil";
                        type = "praesentium";
                    }}),
                    add(new Feature() {{
                        geometry = "voluptatibus";
                        properties = "ipsa";
                        type = "omnis";
                    }}),
                }};
                name = "Ms. Karla Aufderhar";
                type = "maiores";
            }};            

            AddClutterResponse res = sdk.manage.addClutter(req, new AddClutterSecurity("dicta") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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

## delete

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRequest;
import org.openapis.openapi.models.operations.DeleteResponse;
import org.openapis.openapi.models.operations.DeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRequest req = new DeleteRequest(359444L);            

            DeleteResponse res = sdk.manage.delete(req, new DeleteSecurity("dolore") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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

## deleteNetwork

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkRequest;
import org.openapis.openapi.models.operations.DeleteNetworkResponse;
import org.openapis.openapi.models.operations.DeleteNetworkSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteNetworkRequest req = new DeleteNetworkRequest("iusto");            

            DeleteNetworkResponse res = sdk.manage.deleteNetwork(req, new DeleteNetworkSecurity("dicta") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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

## export

Download your data in a format suitable for a third party viewer like Google Earth or ESRI Arcmap.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportFmtEnum;
import org.openapis.openapi.models.operations.ExportRequest;
import org.openapis.openapi.models.operations.ExportResponse;
import org.openapis.openapi.models.operations.ExportSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportRequest req = new ExportRequest("harum", ExportFmtEnum.KMZPPA);            

            ExportResponse res = sdk.manage.export(req, new ExportSecurity("accusamus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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

## list

List your area and path calculations, sorted by time and limited to the last few hundred. To fetch all for a given network append a 'net' filter with the network name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRequest;
import org.openapis.openapi.models.operations.ListResponse;
import org.openapis.openapi.models.operations.ListSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRequest req = new ListRequest() {{
                e = 4142.63;
                n = 9182.36;
                s = 641.47;
                w = 2168.22;
            }};            

            ListResponse res = sdk.manage.list(req, new ListSecurity("quidem") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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
