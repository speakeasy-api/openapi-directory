import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchResponse } from "./batchresponse";
import { KeysAndAttributes } from "./keysandattributes";



export class BatchGetItemOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Responses", elemType: BatchResponse })
  responses?: Record<string, BatchResponse>;

  @SpeakeasyMetadata({ data: "json, name=UnprocessedKeys", elemType: KeysAndAttributes })
  unprocessedKeys?: Record<string, KeysAndAttributes>;
}
