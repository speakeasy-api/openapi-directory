import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorsCreator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authors" })
  authors: Record<string, any>[];
}
