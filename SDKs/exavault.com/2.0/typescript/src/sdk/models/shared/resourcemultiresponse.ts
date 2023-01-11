import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDelete } from "./resourcedelete";
import { ErrorT } from "./error";



export class ResourceMultiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses" })
  responses?: any[];
}
