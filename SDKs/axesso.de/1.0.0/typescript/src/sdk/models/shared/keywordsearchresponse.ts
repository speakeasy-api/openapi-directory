import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeywordSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainCode" })
  domainCode?: string;

  @SpeakeasyMetadata({ data: "json, name=foundProducts" })
  foundProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfProducts" })
  numberOfProducts?: number;

  @SpeakeasyMetadata({ data: "json, name=responseMessage" })
  responseMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=sortStrategy" })
  sortStrategy?: string;
}
