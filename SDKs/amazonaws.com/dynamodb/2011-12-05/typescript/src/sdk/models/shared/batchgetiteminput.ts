import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeysAndAttributes } from "./keysandattributes";



export class BatchGetItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestItems", elemType: KeysAndAttributes })
  requestItems: Record<string, KeysAndAttributes>;
}
