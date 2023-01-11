<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetBng2latlongEastingNorthingRequest, GetBng2latlongEastingNorthingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetBng2latlongEastingNorthingRequest = {
  pathParams: {
    easting: 8717895732742165505,
    northing: 2259404117704393152,
  },
};

sdk.getBng2latlongEastingNorthing(req).then((res: GetBng2latlongEastingNorthingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->