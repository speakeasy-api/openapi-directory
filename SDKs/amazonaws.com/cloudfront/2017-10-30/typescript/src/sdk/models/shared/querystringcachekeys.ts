import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryStringCacheKeys extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: Record<string, any>[];

  @SpeakeasyMetadata()
  quantity: number;
}
