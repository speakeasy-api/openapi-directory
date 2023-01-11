<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ImageOcrImageLinesWithLocationRequest, ImageOcrImageLinesWithLocationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ImageOcrImageLinesWithLocationRequest = {
  security: {
    apikey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  headers: {
    language: "sit",
    preprocessing: "voluptas",
  },
  request: {
    imageFile: {
      content: "culpa".encode(),
      imageFile: "expedita",
    },
  },
};

sdk.imageOcr.imageOcrImageLinesWithLocation(req).then((res: ImageOcrImageLinesWithLocationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->