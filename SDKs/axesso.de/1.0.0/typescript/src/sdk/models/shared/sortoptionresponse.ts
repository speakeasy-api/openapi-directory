import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SortOptionResponseSortOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=sortName" })
  sortName?: string;

  @SpeakeasyMetadata({ data: "json, name=strategy" })
  strategy?: string;
}


export class SortOptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responseMessage" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=resultSize" })
  resultSize?: number;

  @SpeakeasyMetadata({ data: "json, name=sortOptions", elemType: SortOptionResponseSortOptions })
  sortOptions?: SortOptionResponseSortOptions[];
}
