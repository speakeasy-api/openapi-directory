import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScoreSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleDrive" })
  googleDrive?: string;
}
