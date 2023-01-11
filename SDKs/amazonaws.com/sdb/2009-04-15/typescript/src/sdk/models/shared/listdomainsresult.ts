import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDomainsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainNames?: Record<string, any>[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
