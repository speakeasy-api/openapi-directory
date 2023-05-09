# SystemPoliciesConfig

## Overview

System settings (policies)

### Available Operations

* [ChangeClassificationPoliciesConfig](#changeclassificationpoliciesconfig) - Change classification policies
* [ChangeGuestUsersPoliciesConfig](#changeguestuserspoliciesconfig) - Change guest user policies
* [ChangeMfaPoliciesConfig](#changemfapoliciesconfig) - Change MFA policies
* [ChangePasswordPoliciesConfig](#changepasswordpoliciesconfig) - Change password policies
* [EnforceLoginPasswordChange](#enforceloginpasswordchange) - Enforce login password change for all users
* [RequestClassificationPoliciesConfig](#requestclassificationpoliciesconfig) - Request classification policies
* [RequestGuestUsersPoliciesConfig](#requestguestuserspoliciesconfig) - Request guest user policies
* [RequestMfaPoliciesConfig](#requestmfapoliciesconfig) - Request MFA policies
* [RequestPasswordPoliciesConfig](#requestpasswordpoliciesconfig) - Request password policies
* [RequestPasswordPoliciesForPasswordType](#requestpasswordpoliciesforpasswordtype) - Request password policies for a certain password type

## ChangeClassificationPoliciesConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.30.0</h3>

### Description:
Change current classification policies:
* `shareClassificationPolicies`

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Classification policies are changed.

### Further Information:
`classificationRequiresSharePassword`: When a node has this classification or higher, it cannot be shared without a password. If the node is an encrypted file this policy has no effect. `0` means no password will be enforced.



### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.ChangeClassificationPoliciesConfig(ctx, operations.ChangeClassificationPoliciesConfigRequest{
        UpdateClassificationPoliciesConfig: shared.UpdateClassificationPoliciesConfig{
            ShareClassificationPolicies: &shared.ShareClassificationPolicies{
                ClassificationRequiresSharePassword: shared.ShareClassificationPoliciesClassificationRequiresSharePasswordEnumThree.ToPointer(),
            },
        },
        XSdsAuthToken: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassificationPoliciesConfig != nil {
        // handle response
    }
}
```

## ChangeGuestUsersPoliciesConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.40.0</h3>

### Description:
Change current guest user policies.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Guest user policies are changed.  

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.ChangeGuestUsersPoliciesConfig(ctx, operations.ChangeGuestUsersPoliciesConfigRequest{
        UpdateGuestUsersPoliciesConfig: shared.UpdateGuestUsersPoliciesConfig{
            IsInviteUsersEnabled: false,
        },
        XSdsAuthToken: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuestUsersPoliciesConfig != nil {
        // handle response
    }
}
```

## ChangeMfaPoliciesConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:
Change current multi-factor authentication policies.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Multi-factor authentication policies are changed.  

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.ChangeMfaPoliciesConfig(ctx, operations.ChangeMfaPoliciesConfigRequest{
        UpdateMfaPoliciesConfig: shared.UpdateMfaPoliciesConfig{
            IsMfaEnforced: false,
        },
        XSdsAuthToken: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MfaPoliciesConfig != nil {
        // handle response
    }
}
```

## ChangePasswordPoliciesConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>

### Description:  
Change current password policies for any password types:  
* `login`
* `shares`
* `encryption`

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Password policies get changed.

### Further Information:
None.

### Available password policies:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Value | Recommended Value | Password Type |
| :--- | :--- | :--- | :--- | :--- |
| `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li><li>`all` - combination of `uppercase`, `lowercase`, `numeric` and `special`</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li><li>`all`</li></ul> | <ul><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li></ul>  | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4`<br><br>default:<ul><li>`none` - `0`</li><li>`all` - `4`</li><li>otherwise - amount of distinct values<br>cf. `mustContainCharacters` matrix</li></ul> | `3` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`: `12`</li><li>`shares`: `12`</li><li>`encryption`: `14`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li></ul> |
| `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfArchivedPasswords` | Number of passwords to archive. | `Integer between 0 and 10`<br>Set `0` to disable password history. | `3` | <ul><li>`login`</li></ul> |
| `passwordExpiration.enabled` | Determines whether password expiration is enabled.<br>Password expiration policy can only be enabled in context with `enforceLoginPasswordChange`. | `true or false` | `false` | <ul><li>`login`</li></ul> |
| `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` |  | <ul><li>`login`</li></ul> |
| `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | `true` | <ul><li>`login`</li></ul> |
| `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | `5` | <ul><li>`login`</li></ul> |
| `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | `10` | <ul><li>`login`</li></ul> |

</details>

### Deprecated password policies:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Value | Recommended Value | Password Type |
| :--- | :--- | :--- | :--- | :--- |
| <del>`enforceLoginPasswordChange`</del> | Determines whether a login password change should be enforced for all users.<br>Only takes effect, if login password policies get stricter.<br>Use `POST /system/config/policies/passwords/enforce_change` API to enforce a login password change. | `true or false`<br>default: `false` |  | <ul><li>`login`</li></ul> |

</details>

### `mustContainCharacters` matrix:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

|  | `alpha` | `uppercase` | `lowercase` | `numeric` | `special` | `all` | `none` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `alpha` | `alpha` | `uppercase` | `lowercase` | `alpha`<br>`numeric` | `alpha`<br>`special` | `all` | `none` |
| `uppercase` | `uppercase` | `uppercase` | `uppercase`<br>`lowercase` | `uppercase`<br>`numeric` | `uppercase`<br>`special` | `all` | `none` |
| `lowercase` | `lowercase` | `uppercase`<br>`lowercase` | `lowercase` | `lowercase`<br>`numeric` | `lowercase`<br>`special` | `all` | `none` |
| `numeric` | `alpha`<br>`numeric` | `uppercase`<br>`numeric` | `lowercase`<br>`numeric` | `numeric` | `numeric`<br>`special` | `all` | `none` |
| `special` | `alpha`<br>`special` | `uppercase`<br>`special` | `lowercase`<br>`special` | `numeric`<br>`special` | `special` | `all` | `none` |
| `all` | `all` | `all` | `all` | `all` | `all` | `all` | `none` |
| `none` | `none` | `none` |  `none` | `none` | `none` | `none` | `none` |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.ChangePasswordPoliciesConfig(ctx, operations.ChangePasswordPoliciesConfigRequest{
        UpdatePasswordPoliciesConfig: shared.UpdatePasswordPoliciesConfig{
            EncryptionPasswordPolicies: &shared.UpdateEncryptionPasswordPolicies{
                CharacterRules: &shared.CharacterRules{
                    MustContainCharacters: []shared.CharacterRulesMustContainCharactersEnum{
                        shared.CharacterRulesMustContainCharactersEnumLowercase,
                        shared.CharacterRulesMustContainCharactersEnumAll,
                        shared.CharacterRulesMustContainCharactersEnumNumeric,
                        shared.CharacterRulesMustContainCharactersEnumLowercase,
                    },
                    NumberOfCharacteristicsToEnforce: 930819,
                },
                MinLength: sdk.Int(415608),
                RejectKeyboardPatterns: sdk.Bool(false),
                RejectUserInfo: sdk.Bool(false),
            },
            LoginPasswordPolicies: &shared.UpdateLoginPasswordPolicies{
                CharacterRules: &shared.CharacterRules{
                    MustContainCharacters: []shared.CharacterRulesMustContainCharactersEnum{
                        shared.CharacterRulesMustContainCharactersEnumNone,
                        shared.CharacterRulesMustContainCharactersEnumUppercase,
                        shared.CharacterRulesMustContainCharactersEnumAll,
                    },
                    NumberOfCharacteristicsToEnforce: 877399,
                },
                EnforceLoginPasswordChange: sdk.Bool(false),
                MinLength: sdk.Int(32901),
                NumberOfArchivedPasswords: sdk.Int(371919),
                PasswordExpiration: &shared.PasswordExpiration{
                    Enabled: false,
                    MaxPasswordAge: sdk.Int(425946),
                },
                RejectDictionaryWords: sdk.Bool(false),
                RejectKeyboardPatterns: sdk.Bool(false),
                RejectUserInfo: sdk.Bool(false),
                UserLockout: &shared.UserLockout{
                    Enabled: false,
                    LockoutPeriod: sdk.Int(1383),
                    MaxNumberOfLoginFailures: sdk.Int(93894),
                },
            },
            SharesPasswordPolicies: &shared.UpdateSharesPasswordPolicies{
                CharacterRules: &shared.CharacterRules{
                    MustContainCharacters: []shared.CharacterRulesMustContainCharactersEnum{
                        shared.CharacterRulesMustContainCharactersEnumNone,
                    },
                    NumberOfCharacteristicsToEnforce: 318233,
                },
                MinLength: sdk.Int(575213),
                RejectDictionaryWords: sdk.Bool(false),
                RejectKeyboardPatterns: sdk.Bool(false),
                RejectUserInfo: sdk.Bool(false),
            },
        },
        XSdsAuthToken: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PasswordPoliciesConfig != nil {
        // handle response
    }
}
```

## EnforceLoginPasswordChange

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Enforce login password change for all users.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
Login password change is enforced.
Every user has to change their login password at next login.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.EnforceLoginPasswordChange(ctx, operations.EnforceLoginPasswordChangeRequest{
        XSdsAuthToken: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestClassificationPoliciesConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.30.0</h3>

### Description:  
Retrieve a list of classification policies:
* `shareClassificationPolicies`

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of configured classification policies is returned.

### Further Information:
`classificationRequiresSharePassword`: When a node has this classification or higher, it cannot be shared without a password. If the node is an encrypted file this policy has no effect. `0` means no password will be enforced.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.RequestClassificationPoliciesConfig(ctx, operations.RequestClassificationPoliciesConfigRequest{
        XSdsAuthToken: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassificationPoliciesConfig != nil {
        // handle response
    }
}
```

## RequestGuestUsersPoliciesConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.40.0</h3>

### Description:  
Retrieve guest user policies.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.

### Postcondition:
Guest user policies are returned.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.RequestGuestUsersPoliciesConfig(ctx, operations.RequestGuestUsersPoliciesConfigRequest{
        XSdsAuthToken: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GuestUsersPoliciesConfig != nil {
        // handle response
    }
}
```

## RequestMfaPoliciesConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:  
Retrieve a list of multi-factor authentication policies.  

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.

### Postcondition:
List of configured multi-factor authentication policies is returned.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.RequestMfaPoliciesConfig(ctx, operations.RequestMfaPoliciesConfigRequest{
        XSdsAuthToken: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MfaPoliciesConfig != nil {
        // handle response
    }
}
```

## RequestPasswordPoliciesConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>

### Description:  
Retrieve a list of configured password policies for all password types:  
* `login`
* `shares`
* `encryption`

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of configured password policies is returned.

### Further Information:
None.

### Available password policies:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Value | Password Type |
| :--- | :--- | :--- | :--- |
| `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
| `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
| `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
| `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
| `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.RequestPasswordPoliciesConfig(ctx, operations.RequestPasswordPoliciesConfigRequest{
        XSdsAuthToken: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PasswordPoliciesConfig != nil {
        // handle response
    }
}
```

## RequestPasswordPoliciesForPasswordType

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>

### Description:  
Retrieve a list of configured password policies for a certain password type:  
* `login`
* `shares`
* `encryption`

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
List of configured password policies is returned.

### Further Information:
None.

### Available password policies:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Value | Password Type |
| :--- | :--- | :--- | :--- |
| `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
| `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
| `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
| `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
| `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
| `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
| `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SystemPoliciesConfig.RequestPasswordPoliciesForPasswordType(ctx, operations.RequestPasswordPoliciesForPasswordTypeRequest{
        XSdsAuthToken: sdk.String("quis"),
        PasswordType: operations.RequestPasswordPoliciesForPasswordTypePasswordTypeEnumEncryption,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PasswordPoliciesConfig != nil {
        // handle response
    }
}
```
