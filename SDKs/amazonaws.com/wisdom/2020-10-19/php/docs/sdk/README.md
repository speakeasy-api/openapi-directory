# SDK

## Overview

Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're actively speaking with customers. Agents can search across connected repositories from within their agent desktop to find answers quickly. Use Amazon Connect Wisdom to create an assistant and a knowledge base, for example, or manage content by uploading custom files.

Amazon Web Services documentation
<https://docs.aws.amazon.com/wisdom/>
### Available Operations

* [createAssistant](#createassistant) - Creates an Amazon Connect Wisdom assistant.
* [createAssistantAssociation](#createassistantassociation) - Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
* [createContent](#createcontent) - Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
* [createKnowledgeBase](#createknowledgebase) - <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>
* [createSession](#createsession) - Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
* [deleteAssistant](#deleteassistant) - Deletes an assistant.
* [deleteAssistantAssociation](#deleteassistantassociation) - Deletes an assistant association.
* [deleteContent](#deletecontent) - Deletes the content.
* [deleteKnowledgeBase](#deleteknowledgebase) - <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
* [getAssistant](#getassistant) - Retrieves information about an assistant.
* [getAssistantAssociation](#getassistantassociation) - Retrieves information about an assistant association.
* [getContent](#getcontent) - Retrieves content, including a pre-signed URL to download the content.
* [getContentSummary](#getcontentsummary) - Retrieves summary information about the content.
* [getKnowledgeBase](#getknowledgebase) - Retrieves information about the knowledge base.
* [getRecommendations](#getrecommendations) - Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
* [getSession](#getsession) - Retrieves information for a specified session.
* [listAssistantAssociations](#listassistantassociations) - Lists information about assistant associations.
* [listAssistants](#listassistants) - Lists information about assistants.
* [listContents](#listcontents) - Lists the content.
* [listKnowledgeBases](#listknowledgebases) - Lists the knowledge bases.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [notifyRecommendationsReceived](#notifyrecommendationsreceived) - Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
* [queryAssistant](#queryassistant) - Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 
* [removeKnowledgeBaseTemplateUri](#removeknowledgebasetemplateuri) - Removes a URI template from a knowledge base.
* [searchContent](#searchcontent) - Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
* [searchSessions](#searchsessions) - Searches for sessions.
* [startContentUpload](#startcontentupload) - Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateContent](#updatecontent) - Updates information about the content.
* [updateKnowledgeBaseTemplateUri](#updateknowledgebasetemplateuri) - Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 

## createAssistant

Creates an Amazon Connect Wisdom assistant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantRequestBodyServerSideEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssistantRequest();
    $request->requestBody = new CreateAssistantRequestBody();
    $request->requestBody->clientToken = 'minus';
    $request->requestBody->description = 'placeat';
    $request->requestBody->name = 'Ted Mante';
    $request->requestBody->serverSideEncryptionConfiguration = new CreateAssistantRequestBodyServerSideEncryptionConfiguration();
    $request->requestBody->serverSideEncryptionConfiguration->kmsKeyId = 'temporibus';
    $request->requestBody->tags = [
        'quis' => 'veritatis',
    ];
    $request->requestBody->type = CreateAssistantRequestBodyTypeEnum::AGENT;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->createAssistant($request);

    if ($response->createAssistantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssistantAssociation

Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantAssociationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantAssociationRequestBodyAssociation;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssistantAssociationRequestBodyAssociationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssistantAssociationRequest();
    $request->requestBody = new CreateAssistantAssociationRequestBody();
    $request->requestBody->association = new CreateAssistantAssociationRequestBodyAssociation();
    $request->requestBody->association->knowledgeBaseId = 'at';
    $request->requestBody->associationType = CreateAssistantAssociationRequestBodyAssociationTypeEnum::KNOWLEDGE_BASE;
    $request->requestBody->clientToken = 'at';
    $request->requestBody->tags = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';
    $request->assistantId = 'totam';

    $response = $sdk->sdk->createAssistantAssociation($request);

    if ($response->createAssistantAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContent

Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateContentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContentRequest();
    $request->requestBody = new CreateContentRequestBody();
    $request->requestBody->clientToken = 'beatae';
    $request->requestBody->metadata = [
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->requestBody->name = 'Cory Emmerich';
    $request->requestBody->overrideLinkOutUri = 'perferendis';
    $request->requestBody->tags = [
        'natus' => 'sed',
        'iste' => 'dolor',
    ];
    $request->requestBody->title = 'Miss';
    $request->requestBody->uploadId = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->knowledgeBaseId = 'saepe';

    $response = $sdk->sdk->createContent($request);

    if ($response->createContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createKnowledgeBase

<p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateKnowledgeBaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateKnowledgeBaseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateKnowledgeBaseRequestBodyKnowledgeBaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateKnowledgeBaseRequestBodyRenderingConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateKnowledgeBaseRequestBodyServerSideEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateKnowledgeBaseRequestBodySourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AppIntegrationsConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateKnowledgeBaseRequest();
    $request->requestBody = new CreateKnowledgeBaseRequestBody();
    $request->requestBody->clientToken = 'quidem';
    $request->requestBody->description = 'architecto';
    $request->requestBody->knowledgeBaseType = CreateKnowledgeBaseRequestBodyKnowledgeBaseTypeEnum::EXTERNAL;
    $request->requestBody->name = 'Carlton O'Hara';
    $request->requestBody->renderingConfiguration = new CreateKnowledgeBaseRequestBodyRenderingConfiguration();
    $request->requestBody->renderingConfiguration->templateUri = 'dolorem';
    $request->requestBody->serverSideEncryptionConfiguration = new CreateKnowledgeBaseRequestBodyServerSideEncryptionConfiguration();
    $request->requestBody->serverSideEncryptionConfiguration->kmsKeyId = 'corporis';
    $request->requestBody->sourceConfiguration = new CreateKnowledgeBaseRequestBodySourceConfiguration();
    $request->requestBody->sourceConfiguration->appIntegrations = new AppIntegrationsConfiguration();
    $request->requestBody->sourceConfiguration->appIntegrations->appIntegrationArn = 'explicabo';
    $request->requestBody->sourceConfiguration->appIntegrations->objectFields = [
        'enim',
        'omnis',
        'nemo',
        'minima',
    ];
    $request->requestBody->tags = [
        'accusantium' => 'iure',
        'culpa' => 'doloribus',
        'sapiente' => 'architecto',
    ];
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->createKnowledgeBase($request);

    if ($response->createKnowledgeBaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSession

Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSessionRequest();
    $request->requestBody = new CreateSessionRequestBody();
    $request->requestBody->clientToken = 'numquam';
    $request->requestBody->description = 'commodi';
    $request->requestBody->name = 'Nellie Frami';
    $request->requestBody->tags = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->assistantId = 'aut';

    $response = $sdk->sdk->createSession($request);

    if ($response->createSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssistant

Deletes an assistant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssistantRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssistantRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->assistantId = 'vero';

    $response = $sdk->sdk->deleteAssistant($request);

    if ($response->deleteAssistantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssistantAssociation

Deletes an assistant association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssistantAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssistantAssociationRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';
    $request->assistantAssociationId = 'perferendis';
    $request->assistantId = 'doloremque';

    $response = $sdk->sdk->deleteAssistantAssociation($request);

    if ($response->deleteAssistantAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContent

Deletes the content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContentRequest();
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->contentId = 'dicta';
    $request->knowledgeBaseId = 'harum';

    $response = $sdk->sdk->deleteContent($request);

    if ($response->deleteContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKnowledgeBase

<p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKnowledgeBaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKnowledgeBaseRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->knowledgeBaseId = 'molestias';

    $response = $sdk->sdk->deleteKnowledgeBase($request);

    if ($response->deleteKnowledgeBaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssistant

Retrieves information about an assistant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssistantRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssistantRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';
    $request->assistantId = 'repudiandae';

    $response = $sdk->sdk->getAssistant($request);

    if ($response->getAssistantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssistantAssociation

Retrieves information about an assistant association.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssistantAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssistantAssociationRequest();
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->assistantAssociationId = 'quibusdam';
    $request->assistantId = 'explicabo';

    $response = $sdk->sdk->getAssistantAssociation($request);

    if ($response->getAssistantAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContent

Retrieves content, including a pre-signed URL to download the content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->contentId = 'cupiditate';
    $request->knowledgeBaseId = 'quos';

    $response = $sdk->sdk->getContent($request);

    if ($response->getContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContentSummary

Retrieves summary information about the content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContentSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentSummaryRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->contentId = 'excepturi';
    $request->knowledgeBaseId = 'tempora';

    $response = $sdk->sdk->getContentSummary($request);

    if ($response->getContentSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKnowledgeBase

Retrieves information about the knowledge base.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKnowledgeBaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKnowledgeBaseRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->knowledgeBaseId = 'sint';

    $response = $sdk->sdk->getKnowledgeBase($request);

    if ($response->getKnowledgeBaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommendations

Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommendationsRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->assistantId = 'a';
    $request->maxResults = 680056;
    $request->sessionId = 'in';
    $request->waitTimeSeconds = 449198;

    $response = $sdk->sdk->getRecommendations($request);

    if ($response->getRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSession

Retrieves information for a specified session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionRequest();
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->assistantId = 'ea';
    $request->sessionId = 'aliquid';

    $response = $sdk->sdk->getSession($request);

    if ($response->getSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssistantAssociations

Lists information about assistant associations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssistantAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssistantAssociationsRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->assistantId = 'quidem';
    $request->maxResults = 588465;
    $request->nextToken = 'nam';

    $response = $sdk->sdk->listAssistantAssociations($request);

    if ($response->listAssistantAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssistants

Lists information about assistants.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssistantsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssistantsRequest();
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';
    $request->maxResults = 423855;
    $request->nextToken = 'natus';

    $response = $sdk->sdk->listAssistants($request);

    if ($response->listAssistantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContents

Lists the content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContentsRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->knowledgeBaseId = 'labore';
    $request->maxResults = 290077;
    $request->nextToken = 'suscipit';

    $response = $sdk->sdk->listContents($request);

    if ($response->listContentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listKnowledgeBases

Lists the knowledge bases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListKnowledgeBasesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListKnowledgeBasesRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';
    $request->maxResults = 92373;
    $request->nextToken = 'excepturi';

    $response = $sdk->sdk->listKnowledgeBases($request);

    if ($response->listKnowledgeBasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->resourceArn = 'mollitia';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyRecommendationsReceived

Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyRecommendationsReceivedRequest;
use \OpenAPI\OpenAPI\Models\Operations\NotifyRecommendationsReceivedRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyRecommendationsReceivedRequest();
    $request->requestBody = new NotifyRecommendationsReceivedRequestBody();
    $request->requestBody->recommendationIds = [
        'eum',
        'dolor',
    ];
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';
    $request->assistantId = 'eius';
    $request->sessionId = 'maxime';

    $response = $sdk->sdk->notifyRecommendationsReceived($request);

    if ($response->notifyRecommendationsReceivedResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryAssistant

Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryAssistantRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryAssistantRequest();
    $request->requestBody = new QueryAssistantRequestBody();
    $request->requestBody->maxResults = 537023;
    $request->requestBody->nextToken = 'facilis';
    $request->requestBody->queryText = 'in';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';
    $request->assistantId = 'quibusdam';
    $request->maxResults = 'sed';
    $request->nextToken = 'saepe';

    $response = $sdk->sdk->queryAssistant($request);

    if ($response->queryAssistantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeKnowledgeBaseTemplateUri

Removes a URI template from a knowledge base.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveKnowledgeBaseTemplateUriRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveKnowledgeBaseTemplateUriRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->knowledgeBaseId = 'quo';

    $response = $sdk->sdk->removeKnowledgeBaseTemplateUri($request);

    if ($response->removeKnowledgeBaseTemplateUriResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchContent

Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchContentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchContentRequestBodySearchExpression;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchContentRequest();
    $request->requestBody = new SearchContentRequestBody();
    $request->requestBody->searchExpression = new SearchContentRequestBodySearchExpression();
    $request->requestBody->searchExpression->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->knowledgeBaseId = 'ab';
    $request->maxResults = 982575;
    $request->nextToken = 'quidem';

    $response = $sdk->sdk->searchContent($request);

    if ($response->searchContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSessions

Searches for sessions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchSessionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchSessionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchSessionsRequestBodySearchExpression;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchSessionsRequest();
    $request->requestBody = new SearchSessionsRequestBody();
    $request->requestBody->searchExpression = new SearchSessionsRequestBodySearchExpression();
    $request->requestBody->searchExpression->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->assistantId = 'perferendis';
    $request->maxResults = 855804;
    $request->nextToken = 'amet';

    $response = $sdk->sdk->searchSessions($request);

    if ($response->searchSessionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startContentUpload

Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartContentUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartContentUploadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartContentUploadRequest();
    $request->requestBody = new StartContentUploadRequestBody();
    $request->requestBody->contentType = 'aut';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'quis';
    $request->knowledgeBaseId = 'totam';

    $response = $sdk->sdk->startContentUpload($request);

    if ($response->startContentUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds the specified tags to the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'eaque' => 'quis',
        'nesciunt' => 'eos',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->resourceArn = 'hic';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tags from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->resourceArn = 'blanditiis';
    $request->tagKeys = [
        'eaque',
        'occaecati',
        'rerum',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContent

Updates information about the content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContentRequest();
    $request->requestBody = new UpdateContentRequestBody();
    $request->requestBody->metadata = [
        'asperiores' => 'earum',
    ];
    $request->requestBody->overrideLinkOutUri = 'modi';
    $request->requestBody->removeOverrideLinkOutUri = false;
    $request->requestBody->revisionId = 'iste';
    $request->requestBody->title = 'Miss';
    $request->requestBody->uploadId = 'deleniti';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';
    $request->contentId = 'aliquid';
    $request->knowledgeBaseId = 'dolorem';

    $response = $sdk->sdk->updateContent($request);

    if ($response->updateContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateKnowledgeBaseTemplateUri

Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKnowledgeBaseTemplateUriRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKnowledgeBaseTemplateUriRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateKnowledgeBaseTemplateUriRequest();
    $request->requestBody = new UpdateKnowledgeBaseTemplateUriRequestBody();
    $request->requestBody->templateUri = 'dolorem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->knowledgeBaseId = 'dignissimos';

    $response = $sdk->sdk->updateKnowledgeBaseTemplateUri($request);

    if ($response->updateKnowledgeBaseTemplateUriResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
