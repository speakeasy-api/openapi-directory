# checks

## Overview

Rich interactions with checks run by your integrations.

### Available Operations

* [checksCreate](#checkscreate) - Create a check run
* [checksCreateSuite](#checkscreatesuite) - Create a check suite
* [checksGet](#checksget) - Get a check run
* [checksGetSuite](#checksgetsuite) - Get a check suite
* [checksListAnnotations](#checkslistannotations) - List check run annotations
* [checksListForRef](#checkslistforref) - List check runs for a Git reference
* [checksListForSuite](#checkslistforsuite) - List check runs in a check suite
* [checksListSuitesForRef](#checkslistsuitesforref) - List check suites for a Git reference
* [checksRerequestSuite](#checksrerequestsuite) - Rerequest a check suite
* [checksSetSuitesPreferences](#checkssetsuitespreferences) - Update repository preferences for check suites
* [checksUpdate](#checksupdate) - Update a check run

## checksCreate

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.

In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#create-a-check-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksCreateRequest;
import org.openapis.openapi.models.operations.ChecksCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksCreateRequest req = new ChecksCreateRequest(                new java.util.HashMap<String, Object>() {{
                                put("quidem", "molestias");
                            }}, "excepturi", "pariatur");            

            ChecksCreateResponse res = sdk.checks.checksCreate(req);

            if (res.checkRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksCreateSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

By default, check suites are automatically created when you create a [check run](https://docs.github.com/enterprise-server@2.19/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/enterprise-server@2.19/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#create-a-check-suite>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksCreateSuiteRequest;
import org.openapis.openapi.models.operations.ChecksCreateSuiteRequestBody;
import org.openapis.openapi.models.operations.ChecksCreateSuiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksCreateSuiteRequest req = new ChecksCreateSuiteRequest("modi", "praesentium") {{
                requestBody = new ChecksCreateSuiteRequestBody("rem");;
            }};            

            ChecksCreateSuiteResponse res = sdk.checks.checksCreateSuite(req);

            if (res.checkSuite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksGet

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#get-a-check-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksGetRequest;
import org.openapis.openapi.models.operations.ChecksGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksGetRequest req = new ChecksGetRequest(916723L, "quasi", "repudiandae");            

            ChecksGetResponse res = sdk.checks.checksGet(req);

            if (res.checkRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksGetSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#get-a-check-suite>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksGetSuiteRequest;
import org.openapis.openapi.models.operations.ChecksGetSuiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksGetSuiteRequest req = new ChecksGetSuiteRequest(575947L, "veritatis", "itaque");            

            ChecksGetSuiteResponse res = sdk.checks.checksGetSuite(req);

            if (res.checkSuite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksListAnnotations

Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#list-check-run-annotations>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksListAnnotationsRequest;
import org.openapis.openapi.models.operations.ChecksListAnnotationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksListAnnotationsRequest req = new ChecksListAnnotationsRequest(277718L, "enim", "consequatur") {{
                page = 667411L;
                perPage = 842342L;
            }};            

            ChecksListAnnotationsResponse res = sdk.checks.checksListAnnotations(req);

            if (res.checkAnnotations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksListForRef

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#list-check-runs-for-a-git-reference>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksListForRefFilterEnum;
import org.openapis.openapi.models.operations.ChecksListForRefRequest;
import org.openapis.openapi.models.operations.ChecksListForRefResponse;
import org.openapis.openapi.models.shared.StatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksListForRefRequest req = new ChecksListForRefRequest("explicabo", "deserunt", "distinctio") {{
                appId = 841386L;
                checkName = "labore";
                filter = ChecksListForRefFilterEnum.LATEST;
                page = 183191L;
                perPage = 397821L;
                status = StatusEnum.IN_PROGRESS;
            }};            

            ChecksListForRefResponse res = sdk.checks.checksListForRef(req);

            if (res.checksListForRef200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksListForSuite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#list-check-runs-in-a-check-suite>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksListForSuiteFilterEnum;
import org.openapis.openapi.models.operations.ChecksListForSuiteRequest;
import org.openapis.openapi.models.operations.ChecksListForSuiteResponse;
import org.openapis.openapi.models.shared.StatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksListForSuiteRequest req = new ChecksListForSuiteRequest(552822L, "perferendis", "magni") {{
                checkName = "assumenda";
                filter = ChecksListForSuiteFilterEnum.LATEST;
                page = 4695L;
                perPage = 146441L;
                status = StatusEnum.COMPLETED;
            }};            

            ChecksListForSuiteResponse res = sdk.checks.checksListForSuite(req);

            if (res.checksListForSuite200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksListSuitesForRef

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#list-check-suites-for-a-git-reference>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksListSuitesForRefRequest;
import org.openapis.openapi.models.operations.ChecksListSuitesForRefResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksListSuitesForRefRequest req = new ChecksListSuitesForRefRequest("excepturi", "tempora", "facilis") {{
                appId = 735194L;
                checkName = "labore";
                page = 962189L;
                perPage = 433288L;
            }};            

            ChecksListSuitesForRefResponse res = sdk.checks.checksListSuitesForRef(req);

            if (res.checksListSuitesForRef200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksRerequestSuite

Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/enterprise-server@2.19/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#rerequest-a-check-suite>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksRerequestSuiteRequest;
import org.openapis.openapi.models.operations.ChecksRerequestSuiteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksRerequestSuiteRequest req = new ChecksRerequestSuiteRequest(248753L, "eligendi", "sint");            

            ChecksRerequestSuiteResponse res = sdk.checks.checksRerequestSuite(req);

            if (res.checksRerequestSuite201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksSetSuitesPreferences

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/enterprise-server@2.19/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#update-repository-preferences-for-check-suites>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksSetSuitesPreferencesRequest;
import org.openapis.openapi.models.operations.ChecksSetSuitesPreferencesRequestBody;
import org.openapis.openapi.models.operations.ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks;
import org.openapis.openapi.models.operations.ChecksSetSuitesPreferencesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksSetSuitesPreferencesRequest req = new ChecksSetSuitesPreferencesRequest(                new ChecksSetSuitesPreferencesRequestBody() {{
                                autoTriggerChecks = new org.openapis.openapi.models.operations.ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks[]{{
                                    add(new ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks(896039L, false) {{
                                        appId = 592042L;
                                        setting = false;
                                    }}),
                                    add(new ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks(638921L, false) {{
                                        appId = 572252L;
                                        setting = false;
                                    }}),
                                }};
                            }};, "dolor", "debitis");            

            ChecksSetSuitesPreferencesResponse res = sdk.checks.checksSetSuitesPreferences(req);

            if (res.checkSuitePreference != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checksUpdate

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/checks#update-a-check-run>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChecksUpdateRequest;
import org.openapis.openapi.models.operations.ChecksUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChecksUpdateRequest req = new ChecksUpdateRequest(952749L, "dolorum", "in") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("maiores", "rerum");
                    put("dicta", "magnam");
                    put("cumque", "facere");
                    put("ea", "aliquid");
                }};
            }};            

            ChecksUpdateResponse res = sdk.checks.checksUpdate(req);

            if (res.checkRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
