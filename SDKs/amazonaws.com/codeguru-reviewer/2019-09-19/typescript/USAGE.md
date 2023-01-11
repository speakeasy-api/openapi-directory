<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateRepositoryRequest, AssociateRepositoryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateRepositoryRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    clientRequestToken: "voluptas",
    kmsKeyDetails: {
      encryptionOption: "AWS_OWNED_CMK",
      kmsKeyId: "et",
    },
    repository: {
      bitbucket: {
        connectionArn: "nihil",
        name: "rerum",
        owner: "dicta",
      },
      codeCommit: {
        name: "debitis",
      },
      gitHubEnterpriseServer: {
        connectionArn: "voluptatum",
        name: "et",
        owner: "ut",
      },
      s3Bucket: {
        bucketName: "dolorem",
        name: "et",
      },
    },
    tags: {
      "iste": "vitae",
    },
  },
};

sdk.associateRepository(req).then((res: AssociateRepositoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->