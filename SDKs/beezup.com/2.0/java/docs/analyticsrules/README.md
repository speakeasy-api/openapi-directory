# analyticsRules

### Available Operations

* [createRule](#createrule) - Rule creation
* [deleteRule](#deleterule) - Delete Rule
* [disableRule](#disablerule) - Disable rule
* [enableRule](#enablerule) - Enable rule
* [getRule](#getrule) - Gets the rule
* [getRules](#getrules) - Gets the list of rules for a given store
* [getRulesExecutions](#getrulesexecutions) - Get the rules execution history
* [moveDownRule](#movedownrule) - Move the rule down
* [moveUpRule](#moveuprule) - Move the rule up
* [runRule](#runrule) - Run rule
* [runRules](#runrules) - Run all rules for this store
* [updateRule](#updaterule) - Update Rule

## createRule

Rule creation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRuleRequest;
import org.openapis.openapi.models.operations.CreateRuleResponse;
import org.openapis.openapi.models.shared.CreateRuleRequest;
import org.openapis.openapi.models.shared.OptimisationActionNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRuleRequest req = new CreateRuleRequest(                new CreateRuleRequest(OptimisationActionNameEnum.REENABLE, "fb19c53c-2f63-4262-9d94-2d7faa500acd", "My rule") {{
                                endUtcDate = OffsetDateTime.parse("2017-09-30T10:42:40.001Z");
                                startUtcDate = OffsetDateTime.parse("2016-08-29T09:12:33.001Z");
                            }};, "error");            

            CreateRuleResponse res = sdk.analyticsRules.createRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRule

Delete Rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRuleRequest;
import org.openapis.openapi.models.operations.DeleteRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRuleRequest req = new DeleteRuleRequest("quia", "quis");            

            DeleteRuleResponse res = sdk.analyticsRules.deleteRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableRule

Disable rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableRuleRequest;
import org.openapis.openapi.models.operations.DisableRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableRuleRequest req = new DisableRuleRequest("vitae", "laborum");            

            DisableRuleResponse res = sdk.analyticsRules.disableRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableRule

Enable rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableRuleRequest;
import org.openapis.openapi.models.operations.EnableRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EnableRuleRequest req = new EnableRuleRequest("animi", "enim");            

            EnableRuleResponse res = sdk.analyticsRules.enableRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRule

Gets the rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRuleRequest;
import org.openapis.openapi.models.operations.GetRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRuleRequest req = new GetRuleRequest("odit", "quo");            

            GetRuleResponse res = sdk.analyticsRules.getRule(req);

            if (res.rule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRules

Gets the list of rules for a given store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRulesRequest;
import org.openapis.openapi.models.operations.GetRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRulesRequest req = new GetRulesRequest("sequi");            

            GetRulesResponse res = sdk.analyticsRules.getRules(req);

            if (res.ruleList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRulesExecutions

Get the rules execution history

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRulesExecutionsRequest;
import org.openapis.openapi.models.operations.GetRulesExecutionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRulesExecutionsRequest req = new GetRulesExecutionsRequest(949572L, 368725L, "id");            

            GetRulesExecutionsResponse res = sdk.analyticsRules.getRulesExecutions(req);

            if (res.ruleExecutionReportings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## moveDownRule

Move the rule down

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MoveDownRuleRequest;
import org.openapis.openapi.models.operations.MoveDownRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MoveDownRuleRequest req = new MoveDownRuleRequest("possimus", "aut");            

            MoveDownRuleResponse res = sdk.analyticsRules.moveDownRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## moveUpRule

Move the rule up

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MoveUpRuleRequest;
import org.openapis.openapi.models.operations.MoveUpRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MoveUpRuleRequest req = new MoveUpRuleRequest("quasi", "error");            

            MoveUpRuleResponse res = sdk.analyticsRules.moveUpRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runRule

Run rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunRuleRequest;
import org.openapis.openapi.models.operations.RunRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunRuleRequest req = new RunRuleRequest("temporibus", "laborum");            

            RunRuleResponse res = sdk.analyticsRules.runRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runRules

Run all rules for this store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunRulesRequest;
import org.openapis.openapi.models.operations.RunRulesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunRulesRequest req = new RunRulesRequest("quasi");            

            RunRulesResponse res = sdk.analyticsRules.runRules(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRule

Update Rule

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRuleRequest;
import org.openapis.openapi.models.operations.UpdateRuleResponse;
import org.openapis.openapi.models.shared.UpdateRuleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRuleRequest req = new UpdateRuleRequest("reiciendis", "voluptatibus",                 new UpdateRuleRequest("My Rule Renamed") {{
                                endUtcDate = OffsetDateTime.parse("2016-08-29T09:12:33.001Z");
                                startUtcDate = OffsetDateTime.parse("2016-08-29T09:12:33.001Z");
                            }};);            

            UpdateRuleResponse res = sdk.analyticsRules.updateRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
