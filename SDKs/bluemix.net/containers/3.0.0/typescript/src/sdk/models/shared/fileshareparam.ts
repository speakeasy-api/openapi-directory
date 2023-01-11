import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileshareParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fsIOPS" })
  fsIOPS: number;

  @SpeakeasyMetadata({ data: "json, name=fsName" })
  fsName: string;

  @SpeakeasyMetadata({ data: "json, name=fsSize" })
  fsSize: number;
}
