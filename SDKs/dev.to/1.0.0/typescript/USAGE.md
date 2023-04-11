<!-- Start SDK Example Usage -->
```typescript
import {
  shared.Article,
  CreateArticleResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: shared.Article = {
  article: {
    bodyMarkdown: "corrupti",
    canonicalUrl: "provident",
    description: "distinctio",
    mainImage: "quibusdam",
    organizationId: 602763,
    published: false,
    series: "nulla",
    tags: "corrupti",
    title: "Dr.",
  },
};

sdk.articles.createArticle(req).then((res: CreateArticleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->