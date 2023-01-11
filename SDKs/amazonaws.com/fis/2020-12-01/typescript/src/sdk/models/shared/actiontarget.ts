import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
